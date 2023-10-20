import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string ="https://img.freepik.com/fotos-gratis/respingo-colorido-abstrato-3d-background-generativo-ai-background_60438-2509.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697673600&semt=sph"
  contentTitle: string="é nada"
  contentDescription:string="quase isso em"
  private id: string | null ="0"


  constructor(private rout:ActivatedRoute) { }

  ngOnInit(): void {
    this.rout.paramMap.subscribe( value =>
      this.id=value.get("id")
    )
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]


      this.contentTitle = result.title
      this.contentDescription = result.description
      this.photoCover = result.photo

  }
}
