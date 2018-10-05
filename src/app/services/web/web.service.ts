import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Template, Tag, Format } from './../../interfaces';

@Injectable()
export class WebService {

    constructor(private http: Http) { }

    private templatesUrl = 'api/templates';	// URL to web api
    private tags = 'api/tags';	// URL to web api
    private formats = 'api/formats';	// URL api

    private headers = new Headers({'Content-Type': 'application/json'});

    getTemplates(format: number, tag: number): Promise<Template[]> {
        return this.http.get(this.templatesUrl + '?' + (tag ? 'tag=' + tag + '&' : '') + 'format=^' + format + '$')
            .toPromise()
            .then(response => response.json().data as Template[])
            .catch(this.handleError);
    }

    getTags(format: number): Promise<Tag[]> {
        return this.http.get(this.tags + '?format=^' + format + '$')
            .toPromise()
            .then(response => response.json().data as Tag[])
            .catch(this.handleError);
    }

    getTagByUrl(formatId: number, url: string): Promise<Tag> {
        return this.http.get(this.tags + '?format=' + formatId + '&url=^' + url + '$')
            .toPromise()
            .then(response => response.json().data as Tag)
            .catch(this.handleError);
    }

    getFormats(): Promise<Format[]> {
        return this.http.get(this.formats)
            .toPromise()
            .then(response => response.json().data as Format[])
            .catch(this.handleError);
    }

    getFormatByUrl(url: string): Promise<Format> {
        return this.http.get(this.formats + '?url=^' + url + '$')
            .toPromise()
            .then(response => response.json().data as Format)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
