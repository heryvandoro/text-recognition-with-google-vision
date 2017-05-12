var app = angular.module("ocrApp", []);

app.controller("ocrController", function($scope, $http){
	
	var apiKey = "[YOUR API KEY]";
	
	var c = document.getElementById("uploadedPic");
	c.height = 0;
	c.width = 0;
  	var ctx = c.getContext("2d");
  	var img = new Image();

  	$scope.getResult = function(){
  		$scope.vision_api_json = {
		      "requests":[
			{
			  "image":{
				"content" : $scope.imgBase64
			  },
			  "features":[
			    {
			      "type": "TEXT_DETECTION",
			      "maxResults": 1
			    }
			  ]
			}
		      ]
		};

  		$http({
			url : "https://vision.googleapis.com/v1/images:annotate?key="+apiKey,
			method : "POST",
			data : $scope.vision_api_json
		}).then(function(response){
			$scope.result = response.data.responses[0].fullTextAnnotation.text;
		});
  	}

	$scope.uploadPicture = function (ele) {
	  	img.src = URL.createObjectURL(ele.files[0]); 
	    	img.onload = function() {
			c.height = img.height;
			c.width = img.width;
			//draw selected image to canvas
			ctx.drawImage(img, 0, 0);

			//get base64 and set to result section
			var result = c.toDataURL();
			$scope.imgBase64 = result.replace('data:image/png;base64,','', result);
			//alert($scope.imgBase64);
			$scope.$apply();
			$scope.getResult();
		}
	}
})
