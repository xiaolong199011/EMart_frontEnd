import { Injectable } from '@angular/core';
import { HttpHeaders} from '@angular/common/http';
@Injectable()

export class ComParam
{
public url = 'http://localhost:8080';
public httpOptions = {headers:new HttpHeaders({'Content-Type':'application/json;application/x-www-form-urlencodeed; charset=utf-8'})};
}