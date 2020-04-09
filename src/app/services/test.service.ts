import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private httpClient :HttpClient) {
   }

  private RestApi = "localhost:8010/";
  data = {
    "a" : "vaibhav",
    "b" : "dodiya",
  }
  public getTests()
  {
    console.log("http://localhost:8010/test/getAll");
    return this.httpClient.get("http://localhost:8010/test/getAll");
    // return this.data;
  }
  public getTest(id:Number)
  {
    console.log("http://localhost:8010/test/getOne");
    return this.httpClient.get("http://localhost:8010/test/getOne?id="+id);
    // return this.data;
  }
  testException(id){
    return this.httpClient.get("http://localhost:8010/test/test?id="+id);
  }
}
