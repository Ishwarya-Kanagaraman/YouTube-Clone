//  Youtube API key  AIzaSyCA2ZKaEi1fa_jiprrO4FiCtPnxqxoZ_dM

// recent API KEY  AIzaSyDjC4dD2F2_4eowKFSc8JuVrdQngwG0k2M
//AIzaSyDjC4dD2F2_4eowKFSc8JuVrdQngwG0k2M

// OAuth client Id key 3081373582-kqiugn1bi80hsj0ou87jaouaonkv1tkr.apps.googleusercontent.com

const KEY='AIzaSyDjC4dD2F2_4eowKFSc8JuVrdQngwG0k2M';
 const baseURL='https://www.googleapis.com/youtube/v3/channels';


     fetch(baseURL,{
     method:'GET',
     params:{
         part:'snippet',
         key:'3081373582-g2ethv8m2mgn8uvdshsmprl5c8a68etg.apps.googleusercontent.com'
        //  key:'AIzaSyCPqng-0unHY3_KqHWBsX3CkevyslRbiGI'
        //  forUsername:'Google',
        //  id :'UCK8sQmJBp8GCxrOtXWBpyEA'
     }
 })
 .then(data=>data.json())
.then(x=>console.log(x))
 
 
// function authenticate() {
//     return gapi.auth2.getAuthInstance()
//         .signIn({scope: "https://www.googleapis.com/auth/youtube.readonly"})
//         .then(function() { console.log("Sign-in successful"); },
//               function(err) { console.error("Error signing in", err); });
//   }
//   function loadClient() {
//     gapi.client.setApiKey("YOUR_API_KEY");
//     return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
//         .then(function() { console.log("GAPI client loaded for API"); },
//               function(err) { console.error("Error loading GAPI client for API", err); });
//   }
//   // Make sure the client is loaded and sign-in is complete before calling this method.
//   function execute() {
//     return gapi.client.youtube.channels.list({
//       "part": [
//         "snippet,contentDetails,statistics"
//       ],
//       "id": [
//         "UCeY0bbntWzzVIaj2z3QigXg"
//       ]
//     })
//         .then(function(response) {
//                 // Handle the results here (response.result has the parsed body).
//                 console.log("Response", response);
//               },
//               function(err) { console.error("Execute error", err); });
//             }
//             gapi.load("client:auth2", function() {
//               gapi.auth2.init({client_id: "YOUR_CLIENT_ID"});
//             });
 