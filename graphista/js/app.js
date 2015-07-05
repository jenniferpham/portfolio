/**
 * Created by Jennifer on 4/7/2015.
 */
'use strict';

(function(){
    angular.module('portfolioApp',[])
        .controller('ContactCtrl2', function($scope, $http){
            $scope.success = false;
            $scope.error = false;

            $scope.sendMessage = function( input ) {
                input.submit = true;
                $http({
                    method: 'POST',
                    url: 'processForm.php',
                    data: angular.element.param(input),
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                })
                    .success( function(data) {
                        if ( data.success ) {
                            $scope.success = true;
                        } else {
                            $scope.error = true;
                        }
                    } );
            }
        })
        .controller('ContactCtrl', function($scope, $http){
            $scope.result = 'hidden';
            $scope.resultMessage;
            $scope.formData;  //formData is an object holding the name, email, and message
            $scope.submitButtonDisabled = false;
            $scope.submit = function(contactform) {
                $scope.submitted = true;
                $scope.submitButtonDisabled=true;
                if (contactform.$valid){
                    $http({
                        method: 'POST',
                        url: 'contact-form.php',
                        data: $.param($scope.formData), //param method from jquery
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)
                    }).success(function(data){ //success comes from the returned json object
                        console.log(data);
                        if(data.success){
                            $scope.submitButtonDisabled = true;
                            $scope.resultMessage = data.message;
                            $scope.result = 'bg-success';
                        }
                        else{
                            $scope.submitButtonDisabled=false;
                            $scope.resultMessage = data.message;
                            $scope.result = 'bg-danger';
                        }
                    });
                } else{
                    $scope.submitButtonDisabled = false;
                    $scope.resultMessage = 'Please fill out all fields';
                    $scope.result='bg-danger';
                }
            }

        })
        .controller('PortfolioCtrl', function($scope) {
            $scope.samples=[
            {
                'client': 'Select Graphics and Printing',
                'project': 'Ecommerce Website for Printing Company',
                'category': 'business ecommerce',
                'used': 'Pressero (ecommerce platform specific for printing companies)',
                'url': 'https://www.selectgp.com',
                'img': 'selectgp.png',
                'features': [
                    'Ecommerce site allows customers to buy online and upload their files, increasing online sales profits from $0 to $10,000/mo',
                    'Instant price calculators show immediate price changes for different quantities, paper types, and sizes',
                    'Displays business card template designs that users can fill in with their contact info to enhance the ease of designing and ordering business cards',
                    'Offers downloadable layout templates and screenshot instructions to show customers how to set up file correctly to decrease chances of misprints and unhappy customers',
                    'Wrote "about us" to share the 27 years of history, progression, and growth of services to establish relatability and credibility',
                    'Showcases Youtube videos and added social media icons to encourage keeping in touch with customers even when they are not ordering',
                    'Has a responsive design to view on phones and tablets'
                ],
                'description': 'Kim, the owner, had been running a successful business for over 28 years but had never explored the online world. She knew the market was headed online but did not know much about what they could do online.' +
                'After many failed attempts with other web design companies and wasting thousands of dollars without a complete website, I was finally able to help her create an ecommerce site that now brings in approximately $10,000 a month worth of online sales. ' +
                'This does not include customers who research online first and find that the company is credible before coming into the store to order.  This site offers users a lot of free resources like setup instructions and downloadable templates to show customers how to setup the file correctly, and decrease bad prints. ' +
                'It also has instant price calculators to reduce staff time having to quote standard print items. The site also has business card templates that customers can quickly customize and order online with a click of a button.'
            },
            {
                'client': 'Relax Body and Mind Spa',
                'project': 'Wordpress Website for Massage and Skincare Spa',
                'category': 'business wordpress',
                'used': 'Wordpress platform and customized CSS styling',
                'url': 'http://www.relaxbodyandmindspa.com',
                'img': 'relax.png',
                'features': [
                    'Placed phone number and address on all pages to encourage calling or emailing for an appointment (clear call to action)',
                    'Wrote appealing service descriptions, gift certificate packages, and prices to educate users on various service packages',
                    'Added links to their Yelp review site to share their fantastic reviews with new prospective customers and encourage more appointment calls',
                    'Created professional email using domain name',
                    'Wrote "about the owners" to share the owners\' backgrounds and the holistic purpose of the business to enhance credibility and relatability'],
                'description': 'A couple bought the business and were looking for new ways to promote it. Their goal for the website was to get more appointments and establish ' +
                'credibility and branding. Writing descriptions of their services, gift certificates, and prices publically available helped prospects know what they offer' +
                ' and adding links to their Yelp reviews were a true testament to the high caliber of their services, increasing appointment phone calls. The website colors also ' +
                'matched all of their branded print material like business cards and postcard mailers.'
            },
            {
                'client': 'DonRubes Production',
                'project': 'Wordpress Website for Videographer in the Wedding Industry',
                'category': 'business wordpress',
                'used': 'Wordpress platform with responsive theme and customized CSS styling',
                'url': 'http://www.donrubes.com',
                'img': 'donrubes.PNG',
                'features': [
                    "Embedded YouTube and Vimeo videos on homepage to showcase samples",
                    "Displayed rotating slideshow of customer testimonials",
                    "Created Contact Form for users to encourage more inquiries about his services",
                    "Created professional email using domain name to establish credibility",
                    'Put contact info on all web pages to encourage users to book him for their weddings',
                    'Wrote about the videographer to make him appear more relatable, personable, and passionate about his work'
                ],
                'description': 'Donald was a freelance videographer who had a bachelors degree in Videography and has worked in Hollywood ever since college. Although he had many years of experience under his belt, he did not have a website to show off his work' +
                'and market himself to new customers. This website showcased the quality, caliber, and artistic style of his wedding videos.  This also clarified his wedding packages with prices and descriptions of what is included to filter customers that are serious about his services. ' +
                'I also put his contact info on all pages to create a clear call to action, encouraging people to book him for their weddings.'
            },
            {
                'client': 'Star Nails and Wax',
                'project': 'Wordpress Website for Nail Salon',
                'category': 'business wordpress',
                'used': 'Wordpress and customized CSS child themes',
                'url': 'http://www.starnailsandwax.com',
                'img': 'starnails.PNG',
                'features': [
                    'Designed attractive header banner using Adobe Photoshop and wrote tag line to appeal to women',
                    'Added photo slideshow and Instagram photos to show off samples of nails to prospective customers',
                    'Placed phone number and address on all pages to encourage calling or emailing for an appointment (clear call to action)',
                    'Added services and prices to educate users on various service packages',
                    'Created professional email using domain name',
                    'Wrote "about the owners" to share the owners\' backgrounds to enhance credibility and relatability'],
                'description': 'Vicky, a nail salon owner, was unhappy with her current website company because they were charging her monthly and had a hard time getting them to respond to her needs. I helped her create a website with the prices and services ' +
                'as well as a description of what differentiates her nail salon from other nail salons. She mentioned that it was cheaper, I was more responsive, she didn\'t have to keep paying monthly after the project was done, and best of all, the website was more beautiful.'
            },
            {
                'client': '',
                'project': 'To Do List in Angular',
                'category': 'app',
                'used': 'Angular.js two way data binding, Twitter Bootstrap',
                'url': 'http://jenniferpham.biz/Projects/TodoList-Angular/index.html',
                'img': 'todolist-angular.PNG',
                'features': [
                    'Created functions to add, edit, and delete each task on the page without refreshing',
                    'Created function to delete multiple items at one time',
                    'Created function to filter by keyword and prioritize the order',
                    'Styled with buttons using Twitter Bootstrap'],
                'description': "Always trying to make the most of my day, I use tons of to do lists.  Using Javascript, Angular.js, and Twitter Bootstrap, I made a to-do list app that I could add, edit, save, and delete using Angular's two-way data binding and filters along with Twitter Bootstrap icons and buttons."
            },
            {
                'client': '',
                'project': 'Web Development Resources Database',
                'category': 'mobile app',
                'used': 'Angular.js, Firebase Database, Twitter Bootstrap',
                'url': 'http://www.webdevlearning.org',
                'img': 'webdevlearning.PNG',
                'features': [
                    'Created functions to add, edit, and delete each resource site',
                    'Used filters to see different resources by category without refreshing the page',
                    'Displayed iframes to see a preview of the resource site',
                    'Styled with buttons using Twitter Bootstrap',
                    'Connected with Firebase database'
                ],
                'description': "While in my full-time immersive web developers' bootcamp, my classmates and I were constantly sharing website links to read. I created this web developer resource as a database of the quality resources and links worth reviewing.  It uses Angular's filter function to filter on the page without refreshing.  I also use Javascript to add, edit, and delete the resources, and I connected these resources to a Firebase database."
            },
            {
                'client': '',
                'project': 'Tip Calculator Phone App',
                'category': 'mobile app',
                'url': 'http://jenniferpham.biz/Projects/TipCalculator-Ionic/www/index.html',
                'used': 'Ionic framework, HTML5 for mobile, Angular.js, CSS',
                'img': 'tipcalculator-ionic.PNG',
                'features': [
                    'With user input, it calculated how much an individual should tip based on the bill and the number of people in the group',
                    'Used HTML5 and Angular two-way data binding',
                    'Displayed on both Android and Iphones using Ionic framework'
                ],
                'description': "While at restaurants in groups when people pay with multiple credit cards,  I am constantly using a generic calculator to try to figure out what I need to tip for my individual receipt.  While I was learning the Ionic framework (html5 mobile app), I used html5 and Angular data binding to create these calculations. By simply entering in the numbers in the text and number fields of the form, the user can get the individual tip very easily."
            }
        ]
        });
})();