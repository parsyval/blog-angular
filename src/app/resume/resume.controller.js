export class ResumeController{
  constructor(ResumeService){
    'ngInject';

    this.schools = ResumeService.getSchools();
    this.skills = ResumeService.getSkills();
    this.exps = ResumeService.getExp();
  }
}
