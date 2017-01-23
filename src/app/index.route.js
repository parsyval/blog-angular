export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('resume', {
      url: '/resume',
      templateUrl: 'app/resume/resume.html',
      controller: 'ResumeController',
      controllerAs: 'ctrl'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'app/contact/contact.html',
      controller: 'ContactController',
      controllerAs: 'ctrl'
    });

  $urlRouterProvider.otherwise('/');
}
