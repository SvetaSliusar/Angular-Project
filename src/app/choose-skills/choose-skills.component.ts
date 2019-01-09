import { Component, OnInit } from '@angular/core';
import {SkillService} from '../shared/skill.service';
import {Skill} from '../shared/skill.model';
import { SkillRate } from '../shared/skillRate.model';
import { Programmer } from '../shared/programmer.model';
import { ProgrammerService } from '../shared/programmer.service';

@Component({
  selector: 'app-choose-skills',
  templateUrl: './choose-skills.component.html',
  styleUrls: ['./choose-skills.component.css'],
  providers: [SkillService]
})

export class ChooseSkillsComponent implements OnInit {
  selectedCategory: string;  
  skillCategories: string[] = [];
  skills : Skill[]=[];
  selectedSkills:Skill[]=[];
  userSkillCategories: string[]=[];
  userSkills:Skill[]=[];
  isAdd: boolean = false;
  programmer = new Programmer();
  skillRate: SkillRate;

  constructor(private skillService:SkillService, private programmerService: ProgrammerService) { }

  ngOnInit() {  
    this.skillService.getSkillsCategories().subscribe(category=>this.skillCategories=category);
    console.log(this.skillCategories);
    this.programmer.userName = JSON.parse(localStorage.getItem('currentUser')).userName;
    this.programmer.skillRates = [];
  }

  OnCategoryChange(data){
    this.selectedCategory = data;    
    this.skillService.getSkillsByCategory(this.selectedCategory).subscribe(skill=>this.skills=skill);
  }

  OnClick(){
    this.selectedSkills.forEach(skill=>this.userSkills.push(skill));
    this.selectedSkills.splice(0);
    if(!this.userSkillCategories.includes(this.selectedCategory))
      this.userSkillCategories.push(this.selectedCategory);    
    this.isAdd=true;   
  }

  OnSaveUserSkills(){
    this.programmerService.addSkillRate(this.programmer).subscribe(()=>{});
    this.programmer.skillRates.splice(0);
  }

  onRateChange(skill:Skill, rate:number){
    this.skillRate = new SkillRate();
    this.skillRate.skill = skill; this.skillRate.rate = rate;
    this.programmer.skillRates.push(this.skillRate);
    console.log(this.programmer);    
  }

}
