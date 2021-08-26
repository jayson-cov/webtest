import { Component, ViewChild, AfterViewInit, ElementRef, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-imgview',
  templateUrl: './imgview.component.html',
  styleUrls: ['./imgview.component.css']
})
export class ImgviewComponent implements OnInit {
  @ViewChild('myCanvas', {static: false}) myCanvas: ElementRef<HTMLCanvasElement>;
  public context: CanvasRenderingContext2D;
  public str: string;

  private startx: number;
  private starty: number;
  private x: number;
  private y: number;
  private dragging: boolean;
  private scale: number;

  img;

  constructor() {
    this.str = "Out of canvas!"
    this.img = new Image();
    this.img.src =  "/assets/waves.jpg"
    this.startx = 0;
    this.starty = 0;
    this.scale = 1;
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.context = this.myCanvas.nativeElement.getContext('2d');

    this.load()
  }

  load(){
    const self = this;
    this.img.onload = function() {
      self.context.drawImage(self.img, 0, 0);
    }
  }

  onDragStart(e){
    this.dragging = true;
    this.x = e.offsetX;
    this.y = e.offsetY;
  }

  onDrag(e){
    this.str = e.offsetX + " " + e.offsetY
    if(this.dragging){
      this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height)
      this.context.drawImage(this.img, this.startx+e.offsetX-this.x, this.starty+e.offsetY-this.y, this.img.naturalWidth * this.scale, this.img.naturalHeight * this.scale);
    }
  }

  onScroll(e){
    this.scale += e.deltaY * -0.001;
    if(this.scale < 0)
      this.scale = 0.01;
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height)
    this.context.drawImage(this.img, this.startx, this.starty, this.img.naturalWidth * this.scale, this.img.naturalHeight * this.scale);
  }

  onDragExit(e){
    this.dragging = false;
    this.startx = this.startx + (e.offsetX-this.x);
    this.starty = this.starty + (e.offsetY-this.y);
  }

  mouseExited(e){
    if(this.dragging)
      this.onDragExit(e)
    this.str = "Out of canvas!"
  }

  rotateImage(){
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height)
    this.context.save()
    this.context.translate(this.startx + this.img.naturalWidth/2, this.starty + this.img.naturalHeight/2)
    this.context.rotate(30*Math.PI/180)
    this.context.translate(-(this.startx + this.img.naturalwidth/2), -(this.starty + this.img.naturalHeight/2));
    this.context.drawImage(this.img, this.startx, this.starty)
    this.context.restore()
  }
}
