/**
 * Created by Jennifer on 4/7/2015.
 */
'use strict';

(function(){
    angular.module('portfolioApp',[])
        .controller('PortfolioCtrl', function($scope) {
            $scope.samples=[
            {
                'client': 'Select Graphics and Printing',
                'project': 'Ecommerce Website for Printing Company',
                'category': 'business ecommerce',
                'used': 'Pressero',
                'url': 'https://www.selectgp.com',
                'img': 'selectgp.png',
                'features': ["can shop online", "wrote product descriptions", "tabbed descriptions"],
               /* 'goals': [
                    {goal: 'goal #1', did: 'what I did to accomplish goal#1'},
                    {goal: 'goal #2', did: 'what I did to accomplish goal#2'},
                    {goal: 'goal #3', did: 'what I did to accomplish goal#3'}
                ],*/
                'description': 'Owner was a mom who had the business ...selectgp description'
            },
            {
                'client': 'Relax Body and Mind Spa',
                'project': 'Wordpress Website for Massage and Skincare Spa',
                'category': 'business wordpress',
                'used': 'Wordpress',
                'url': 'http://www.relaxbodyandmindspa.com',
                'img': 'relax.png',
                'features': ["can shop online", "wrote product descriptions", "tabbed descriptions"],
             /*   'goals': [
                    {goal: 'goal #1', did: 'what I did to accomplish goal#1'},
                    {goal: 'goal #2', did: 'what I did to accomplish goal#2'},
                    {goal: 'goal #3', did: 'what I did to accomplish goal#3'}
                ],*/
                'description': 'Owner was a dad who raised...selectgp description'
            },
            {
                'client': 'DonRubes Production',
                'project': 'Wordpress Website for Videographer in the Wedding Industry',
                'category': 'business wordpress',
                'used': 'Wordpress',
                'url': 'http://www.donrubes.com',
                'img': 'donrubes.PNG',
                'features': ["can shop online", "wrote product descriptions", "tabbed descriptions"],
                'goals': [
                    {goal: 'goal #1', did: 'what I did to accomplish goal#1'},
                    {goal: 'goal #2', did: 'what I did to accomplish goal#2'},
                    {goal: 'goal #3', did: 'what I did to accomplish goal#3'}
                ],
                'description': 'Videographer was working in Hollywood since college'
            },
            {
                'client': 'Star Nails and Wax',
                'project': 'Wordpress Website for Nail Salon',
                'category': 'business wordpress',
                'used': 'Wordpress',
                'url': 'http://www.starnailsandwax.com',
                'img': 'starnails.PNG',
                'features': ["can shop online", "wrote product descriptions", "tabbed descriptions"],
                'goals': [
                    {goal: 'goal #1', did: 'what I did to accomplish goal#1'},
                    {goal: 'goal #2', did: 'what I did to accomplish goal#2'},
                    {goal: 'goal #3', did: 'what I did to accomplish goal#3'}
                ],
                'description': 'Videographer was working in Hollywood since college'
            },
            {
                'client': '',
                'project': 'To Do List in Angular',
                'category': 'app',
                'used': 'Angular two way data binding',
                'url': 'http://www.jenniferpham.biz/Projects/Todolist-Angular/index.html',
                'img': 'todolist-angular.PNG',
                'features': ["can shop online", "wrote product descriptions", "tabbed descriptions"],
                'goals': [
                    {goal: 'goal #1', did: 'what I did to accomplish goal#1'},
                    {goal: 'goal #2', did: 'what I did to accomplish goal#2'},
                    {goal: 'goal #3', did: 'what I did to accomplish goal#3'}
                ],
                'description': 'To keep learning Angular'
            },
            {
                'client': '',
                'project': 'Web Development Resources Database',
                'category': 'mobile app',
                'used': 'Angular with Firebase Database',
                'url': 'http://www.webdevlearning.org',
                'img': 'webdevlearning.PNG',
                'features': ["can shop online", "wrote product descriptions", "tabbed descriptions"],
                'goals': [
                    {goal: 'goal #1', did: 'what I did to accomplish goal#1'},
                    {goal: 'goal #2', did: 'what I did to accomplish goal#2'},
                    {goal: 'goal #3', did: 'what I did to accomplish goal#3'}
                ],
                'description': 'To keep learning Angular'
            },
            {
                'client': '',
                'project': 'Tip Calculator Phone App',
                'category': 'mobile app',
                'url': 'http://jenniferpham.biz/Projects/TipCalculator-Ionic/www/index.html',
                'used': 'Ionic html5 mobile',
                'img': 'tipcalculator-ionic.PNG',
                'features': ["can shop online", "wrote product descriptions", "tabbed descriptions"],
                'goals': [
                    {goal: 'goal #1', did: 'what I did to accomplish goal#1'},
                    {goal: 'goal #2', did: 'what I did to accomplish goal#2'},
                    {goal: 'goal #3', did: 'what I did to accomplish goal#3'}
                ],
                'description': 'To keep learning Angular'
            }
        ]
        });
})();