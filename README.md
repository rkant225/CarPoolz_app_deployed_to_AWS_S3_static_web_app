#### This is simple react application, which mainly have 2 functionality first, user can book a cab-ride as a car pooling. second, If user have a care and he/she have some empty seats and wants to give lift to another passanger then he can offer ride by entering his/her source and destination in app.

## Technologies used :
1. React JS
2. React Router
3. React Redux
4. Redux thunk
5. Axios
6. Browser's Local storage (as database)

## Main goal of this app was to focus on the static webApp deployment to AWS S3 storage
Only static webApps can be deployed to AWS S3, This is a static webApp because it does't intract with outer world to GET or POST data via ajax. You can fing deployed version of app here http://carpooolz-deploy.s3-website.ap-south-1.amazonaws.com/

# Steps to deploy app
## 1. Create account in Amazon AWS, and verify your Card Details for future payments. (https://aws.amazon.com/console/) 
![alt text](https://user-images.githubusercontent.com/26189907/85405704-70ba8480-b57e-11ea-8cbd-25e055064bd0.png)

## 2. Click on Services and select S3 to create a new S3 inatance.
![alt text](https://user-images.githubusercontent.com/26189907/85406500-8c725a80-b57f-11ea-9026-1bdc85ac9e23.png)

## 3. Click on Add bucket to add a new bucket, and fill the mandatory details. (Further this bucket will contain different `objects`)
### a.) Creace Bucket
  ![image](https://user-images.githubusercontent.com/26189907/85407130-6e592a00-b580-11ea-994a-c5857d267413.png)
### b.) Provide bucket details
  ![image](https://user-images.githubusercontent.com/26189907/85407590-02c38c80-b581-11ea-96da-6f04942362d8.png)
### c.) Created bucket will look like this
  ![image](https://user-images.githubusercontent.com/26189907/85408157-c8a6ba80-b581-11ea-8041-3a5691776a0a.png)

## 4. Click on your bucket name and it will open like this.
![image](https://user-images.githubusercontent.com/26189907/85408699-7ade8200-b582-11ea-8a92-f45ecd887e92.png)

## 5. Now go to second Tab `Properties` and enable `Static web hoisting`.
![image](https://user-images.githubusercontent.com/26189907/85408974-d872ce80-b582-11ea-9724-0e52350ce424.png)

## 6. When you woll click on `Static web hoisting` box, then you will see a new box like below, please fill the required details here and click on Save.
![image](https://user-images.githubusercontent.com/26189907/85409236-330c2a80-b583-11ea-91b4-f4ecde84b7cd.png)

## 7. Now go to third tab `Permisions` and under this open first tab `Block Public Access` (this will be selected by default), here you have to allow all the public access. Click on `Edit`, then un-check all the `checkboxex` and `save`.
### a.) Permissions tab will look like this first.
![image](https://user-images.githubusercontent.com/26189907/85409843-f3920e00-b583-11ea-91eb-8ec706ae9d86.png)
### b.) Edit it to provide all the permissions and click on `save`. (by default it will be blocked) NOTE : It will ask you to type "confirm" in a text box to complete the action, please do it.
![image](https://user-images.githubusercontent.com/26189907/85410138-55eb0e80-b584-11ea-8178-efdb71ff5cda.png)
### c.) Finaly it will look like this
![image](https://user-images.githubusercontent.com/26189907/85410298-8af76100-b584-11ea-9d62-c07cc295ba95.png)

## 8. Now under `Permissions` tab only go to 3rd tab `Bucket Policy` to define the bucket access policy, And click on `Policy Generator` at the bottom of screen.
### a.) Bucket Policy screen will look like this
![image](https://user-images.githubusercontent.com/26189907/85410641-f8a38d00-b584-11ea-9c34-e8336e1b8fcb.png)
### b.) When you will click on `Policy Generator` Link this page will be presented, This is important step please zoom this image and go through it. Once you are don click on `Add Statement` button. (you have to generete a json data, then copy it and past in above screen)
![image](https://user-images.githubusercontent.com/26189907/85413167-18888000-b588-11ea-93c0-263aee08eb94.png)
### c.) Once you click on `Add statement` button at bottom of page you will see this, And here you have to click on `Generate Policy` button. from the popup just copy the generated JSON object.
#### i) ![image](https://user-images.githubusercontent.com/26189907/85413438-74530900-b588-11ea-939d-531e926f86db.png)
#### ii) ![image](https://user-images.githubusercontent.com/26189907/85413722-cb58de00-b588-11ea-8b5b-a4fad8fe3d1f.png)
### d.) Finaly paste the copied JSON in `Bucket Policy` text editor and save it. (you will get some warning message that now your bucket is accesable to public)
![image](https://user-images.githubusercontent.com/26189907/85413997-2e4a7500-b589-11ea-9c58-107c02951816.png)

## 9. Now you are all set, You just want to build your react-app and upload that build folder to `Overview` tab.
### a.) Navigate to your project and run `npm run build` command to generete the build folder which will be deployed to S3.
![image](https://user-images.githubusercontent.com/26189907/85414909-51c1ef80-b58a-11ea-9146-2e5914c28189.png)
### b.) Now go to AWS and navigate to first tab `Overview`, here you will see `Upload` button, click on it and upload all the content of your build folder. NOTE : Internal `asset` folder need to be uploaded manualy, each folder in side it also need to uploaded manualy (create new folder with same names, and upload contentent in respective folders), Once every thing is uploaded then it will look like this :
![image](https://user-images.githubusercontent.com/26189907/85415475-fba17c00-b58a-11ea-9dcc-1ebace02b523.png)

## 10. Now in the final step you need to get the URL of your deployed applicatio. For this go to 2nd tab `Properties` then cllick on `Static web hoisting` box, here you will get your publoc URL. (http://carpooolz-deploy.s3-website.ap-south-1.amazonaws.com/)
![image](https://user-images.githubusercontent.com/26189907/85415659-34d9ec00-b58b-11ea-87dc-0f446d6044df.png)





