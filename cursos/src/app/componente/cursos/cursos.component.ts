import { Component, OnInit } from '@angular/core';
import { curso } from './cursos';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

   cursos: curso[] = [
    {
      lenguaje: 'Python',
      description: 'Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured, object-oriented and functional programming.',
      imagen: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2F8%2F9%2Fa%2F145400.jpg&f=1&nofb=1&ipt=b9911c0b2bf92d0cf66a23a1223ec401e40680aa61c202d639e9de20e0dd03bd&ipo=images',
      costo: 15000
    },
    {
      lenguaje: 'Javascript',
      description: 'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.',
      imagen: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flearntocodetogether.com%2Fwp-content%2Fuploads%2F2018%2F02%2Fjavascript.jpg&f=1&nofb=1&ipt=6829b19bb3939eb9d2c48b6966d17f08ea552977132e6d64f3535ed38b8f7f65&ipo=images',
      costo: 15000
    },
    {
      lenguaje: 'Java',
      description: 'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere, meaning that compiled Java code can run on all platforms that support Java without the need to recompile.',
      imagen: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fwww.xamnation.com%2Fwp-content%2Fuploads%2F2019%2F12%2FJava_logo_icon.png%3Fw%3D3600%26ssl%3D1&f=1&nofb=1&ipt=9f3be90c818d351a9f58dda46a0be19738888c29484cfcc52d30634af1f4fd1c&ipo=images',
      costo: 25000
    },
    {
      lenguaje: 'C sharp',
      description: 'C# is a general-purpose, high-level multi-paradigm programming language. C# encompasses static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines.',
      imagen: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-05E4c9T4b3Q%2FYKPk3zKlcdI%2FAAAAAAAAAe0%2F-pHoalOEy5QoI8UfdvSTG4kwjnZVlZmYgCLcBGAsYHQ%2Fw1200-h630-p-k-no-nu%2F20210518_211731_0000.png&f=1&nofb=1&ipt=41c2f088d1d6de04569e115bcae2a335243b7cd24ed2585b1da9bf581aaf81c1&ipo=images',
      costo: 20000
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
