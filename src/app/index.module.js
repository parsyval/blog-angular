/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';

import { ResumeController } from './resume/resume.controller';
import { ContactController } from './contact/contact.controller';
import { ResumeService } from '../app/components/resume/resume.service';
import { ContactService } from '../app/components/contact/contact.service';

angular.module('blog', ['ngResource', 'ui.router', 'ui.bootstrap', 'toastr'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)
  .service('ContactService', ContactService)
  .service('ResumeService', ResumeService)
  .controller('MainController', MainController)
  .controller('ResumeController', ResumeController)
  .controller('ContactController', ContactController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('acmeMalarkey', MalarkeyDirective);
