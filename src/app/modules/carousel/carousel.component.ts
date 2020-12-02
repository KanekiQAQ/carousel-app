import { Component, OnInit } from '@angular/core';
import { ItemInfo } from '../../models/ItemInfo';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.less']
})
export class CarouselComponent implements OnInit {

  public list: ItemInfo[] = [];
  public chooseList: ItemInfo[] = [];
  public selectedIndex: number;
  constructor(private message: NzMessageService) { }

  ngOnInit() {
  }

  chooseOne() {
    var max = this.list.length;
    this.selectedIndex = Math.floor(Math.random() * Math.floor(max));
    this.chooseList.push(this.list[this.selectedIndex]);
    this.message.info(`最终选择的是：${this.list[this.selectedIndex].name}`);
  }

  add(name: string) {
    name = name.trim();
    if (!name) { return; }
    this.list = [...this.list, { name } as ItemInfo];
    // this.list.push({ name } as ItemInfo);
  }

  delete(model: ItemInfo) {
    this.list = this.list.filter(m => m !== model);
  }

  flush() {
    this.chooseList = [];
  }

}
