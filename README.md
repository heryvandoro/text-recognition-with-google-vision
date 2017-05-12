# Simple Text Recognition with Google Vision API
Text recognition is the process of detecting text in images and video streams and recognizing the text contained therein. Once detected, the recognizer then determines the actual text in each block and segments it into lines and words.

## Description
Text Recognition are implemented from Google Vision API. [Documentation](https://cloud.google.com/vision/)

## How Works
![](https://developers.google.com/vision/images/text-structure.png)
First, you must convert the selected image into Base64 Format. In this case, we convert it by using HTML 5 features (Canvas). Canvas allow you to get Base64 format of drawed images with **toDataURL()** method. Then, you can post the data to Google Vision REST API on `https://vision.googleapis.com/v1/images:annotate`. You can read full documentation [here](https://cloud.google.com/vision/docs/reference/rest/).

## Language
Builded with HTML, with AngularJS and pure javascript.
