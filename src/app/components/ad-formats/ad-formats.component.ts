declare var require: any;

import { Component, OnInit } from '@angular/core';

import { WebService } from './../../services/web/web.service';
import { ActivatedRoute, Params } from '@angular/router';

import { Template, Tag, Format } from './../../interfaces';

const $ = require('jquery');
require('fancybox')($);

@Component({
  selector: 'app-ad-formats',
  templateUrl: './ad-formats.component.html',
  styleUrls: ['./ad-formats.component.css']
})

export class AdFormatsComponent implements OnInit {

  templates: Template[];
  tags: Tag[];
  formats: Format[];
  format: Format;
  tag: Tag;
  currentFormat: string;

  constructor(
    private webService: WebService,
    private route: ActivatedRoute
  ) {}

  getData(url: any): void {
    this.webService.getFormatByUrl(url.format).then(format => {
      this.format = format;

      if (url.tag) {
        this.webService.getTagByUrl(this.format[0].id, url.tag).then(tag => {
          this.tag = tag;

          this.webService.getTemplates(this.format[0].id, this.tag[0].id).then(templates => {
            this.templates = templates;
            this.addFancyBox();
          });
        });
      } else {
        this.webService.getTemplates(this.format[0].id, 0).then(templates => {
          this.templates = templates;
          this.addFancyBox();
        });
      }

      this.webService.getTags(this.format[0].id)
        .then(tags => this.tags = tags)
        .then(currentFormat => this.currentFormat = this.format[0].url);
    });
  }

  getFormats(): void {
    this.webService.getFormats().then(formats => this.formats = formats);
  }

  addFancyBox(): void {

    $(document).ready(() => {

      if ($('.fancybox').length > 0) {

        $('.fancybox').fancybox({
            padding : 0,
            beforeShow: function () {
              this.title = $(this.element).attr('title');
              this.title = '<h4>' + this.title + '</h4>' + '<p>' + $(this.element).parent().find('img').attr('alt') + '</p>';
            },
            helpers : {
              title : { type: 'inside' },
            }
          });
      }
    });
  }

  ngOnInit(): void {
    this.route.params.forEach(params => {
      this.getData(params);
    });

    this.getFormats();
  }
}
