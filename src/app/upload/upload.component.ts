import { Component, OnInit } from '@angular/core';
import * as AWS from "aws-sdk";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  public upload(event) {
    var file = event.srcElement.files[0];
    if ('image/gif' !== file.type) {
      alert('You must choose a gif to upload');
      return
    }

    /** THIS IS NOT A SECURE WAY TO UPLOAD TO S3 **/
    /** THESE CREDENTIALS ARE IN PLAIN TEXT IN THE BROWSER **/
    var accessKey = '<ACCESS_KEY>';
    var secretKey = '<SECRET_KEY>';

    var awsCreds = new AWS.Credentials(accessKey, secretKey);
    var s3 = new AWS.S3({credentials: awsCreds, region:'us-east-1'});
    var params = {
      Bucket: '<BUCKET_NAME>',
      Key: 'gifs/' + file.name,
      ACL: 'public-read',
      ContentType: 'image/gif',
      Body: file
    };
    s3.putObject(params, function (err, data) {
      if (err) {
        alert('Error when uploading to s3');
        console.error(err);
      } else {
        alert('Uploaded to S3 successfully.');
      }
    });
  }
}
