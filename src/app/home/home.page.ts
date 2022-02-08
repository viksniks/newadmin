import { ANALYZE_FOR_ENTRY_COMPONENTS, Component } from '@angular/core';

import { CallingService } from "../api/calling.service";
import { ToastController, LoadingController } from "@ionic/angular";


@Component({

  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [CallingService]
})
export class HomePage {
  // private fieldArray: Array<any> = [];

  // private newAttribute: any = {name:"",sektor:"",weight:"",piece:"",time:""};

  obj: any = {};
  keys: any[] = [];
  keysTemp:any[]=[];
  location: string = "";
  comments: string = "";
  sorted: any[] = [];
  bigfish: string = "";
  totalweight: string = "";
  totalpiece: string = "";
  clickedtime: string = "";
  routeObj: any = {};
  routeKeys:string[]=[];
  sektorKeys: string[] = [];
  disabledCalcultion: boolean = true;
  init: boolean = false;
  aSponsor:string="";
  bSponsor:string="";
  cSponsor:string="";
  dSponsor:string="";
  sponser:any={};


  constructor(private service: CallingService, private loader: LoadingController, private toast: ToastController) {

  }


  getMetaInfo() {
    var ref = this;
    this.service.getMetaInfo(function (data) {
      if (data) {
        ref.location = data.location;
        ref.comments = data.comments;
      }
    })
  }
  insertMetaInfo() {
    this.service.insertMetaInfo({ location: this.location, comments: this.comments });
  }
  ngOnInit() {
    setTimeout(() => {


      this.getData();
    }, 1000)
  }


  numericOnly(event): boolean {
    var code = (event.keyCode ? event.keyCode : event.which);
    if(code == 13) { //Enter keycode
       return true;
    }


    var p1 = /\s/g;
    if (p1.test(event.key) == false) {
      let patter = /^([0-9])$/;
      let result = patter.test(event.key);
      console.log(result);
      return result;
    }
    else {
      return true;
    }
  }



  calculate() {
    if (window.confirm("Attila, előbb MENTÉS !!! és csak azután az ÁLLÁS SZÁMÍTÁS !")) {
      let temp = [];
      for (var i = 0; i < this.keys.length; i++) {
        var w = 0;
        var p = 0;
        if (this.obj[this.keys[i]].weight) {
          let arr = this.obj[this.keys[i]].weight.split('\n');
          if (this.obj[this.keys[i]].sektor == "B1") {
            console.log(arr);
          }
          for (var k = 0; k < arr.length; k++) {
            if (arr[k] != "") {
              w = w + parseFloat(arr[k]);
            }

          }
          //  temp.push({name:this.obj[this.keys[i]].name,weight:w});
          //   temp = temp.sort((a, b) => (a.weight > b.weight) ? 1 : -1 );
          //   temp = temp.reverse();
          //   this.sorted = temp;
        }
        if (this.obj[this.keys[i]].piece) {
          let arr = this.obj[this.keys[i]].piece.split('\n');

          for (var k = 0; k < arr.length; k++) {
            if(arr[k] != "")
            {
            p = p + parseFloat(arr[k]);
            }

          }
          //  temp.push({name:this.obj[this.keys[i]].name,weight:w});
          //   temp = temp.sort((a, b) => (a.weight > b.weight) ? 1 : -1 );
          //   temp = temp.reverse();
          //   this.sorted = temp;
        }
        if (w > 0) {
          temp.push({ sektor: this.obj[this.keys[i]].sektor, name: this.obj[this.keys[i]].name, weight: w, piece: p });
        }

      }
      temp = temp.sort((a, b) => (a.weight > b.weight) ? 1 : -1);
      temp = temp.reverse();
      this.sorted = temp;

      console.log(JSON.stringify(temp));
      if (this.sorted.length > 0) {
        let totalweight = 0;
        let totalpiece = 0;
        console.log(JSON.stringify(this.sorted));
        for (var i = 0; i < this.sorted.length; i++) {
          totalweight = totalweight + parseInt(this.sorted[i].weight);
          totalpiece = totalpiece + parseInt(this.sorted[i].piece)

        }
        this.totalweight = totalweight.toString();
        this.totalpiece = totalpiece.toString();
      }
      var ref = this;
      this.service.insertClickedTime(function (data) {
        ref.service.getClickedTime(function (data1) {
          if (data1) {
            ref.clickedtime = data1;
          }
        })

      });
    }
  }

  getTotalWeightAndFish() {

  }

  addFieldValue() {
    this.obj[Date.now().toString()] = {};
    this.keys = Object.keys(this.obj);
    //  var obj = this.newAttribute;
    //   obj["new"] = true;
    //     this.fieldArray.push(obj);

    // this.newAttribute = {};
  }

  checkKey(key)
  {
    for(var i = 0;i<this.keysTemp.length;i++)
    {
      if(this.keysTemp[i] == key)
      {
             return true;
      }
    }
    return false;
  }

  // deleteFieldValue(key,i) {
  //   if (window.confirm("BIZTOS VAGY BENNE ATTILA? DE TUTI?")) {
  //     alert(key);

  //     alert(this.checkKey(key));
  //     if(this.checkKey(key))
  //     {
  //     var ref = this;
  //     this.loader.create({
  //       message: "kérlek várj..."
  //     }).then((ele) => {

  //       ele.present();
  //       this.service.deleteData(key, function (data) {
  //         console.log(data);
  //         ele.dismiss();
  //         ref.showToast(data);
  //         ref.getData();
  //       })
  //     })
  //   }else{
  //     this.keys.splice(i,1);
  //   }
  //   }
  // }

  deleteFieldValue(key) {
    if (window.confirm("BIZTOS VAGY BENNE ATTILA? DE TUTI?")) {
      var ref = this;
      this.loader.create({
        message: "kérlek várj..."
      }).then((ele) => {

        ele.present();
        this.service.deleteData(key, function (data) {
          ele.dismiss();
          ref.showToast(data);
          ref.getData();
        })
      })
    }
  }

  // deleteFieldValue(key) {
  //    // this.fieldArray.splice(index, 1);
  //    delete this.obj[key];
  //    this.keys = Object.keys(this.obj);
  // }
  getBigFish() {
    var ref = this;
    this.service.getBigFish(function (data) {
      if (data) {
        ref.bigfish = data;
      }

    })

  }
  insertData() {
    //this.fieldArray.push(this.newAttribute);

    // alert(JSON.stringify(this.fieldArray));
    // let  = [];
    let ref = this;
    //    for(var i = 0;i<this.keys.length;i++)
    //    {
    //      console.log(this.obj[this.keys[i]]);
    //      if(this.obj[this.keys[i]].name != "" || this.obj[this.keys[i]].sektor != "" || this.obj[this.keys[i]].weight != "" || this.obj[this.keys[i]].piece != ""  || this.obj[this.keys[i]].time != "")
    //      {

    // delete this.obj[this.keys[i]];
    //      // arr.push(this.fieldArray[i]);

    //      }


    //    }
    //(JSON.stringify(arr));

    this.loader.create({
      message: "kérlek várj..."
    }).then((ele) => {

      ele.present();
      this.service.insertData(this.obj, function (str) {
        //alert(str);
        ele.dismiss();
        ref.showToast(str);
        ref.insertMetaInfo();
       // ref.service.insertBigFish(ref.bigfish);
        let temp = {};
        // if(ref.aSponsor)
        // {
        //   temp["A"] = ref.aSponsor;

          
        // }
        // if(ref.bSponsor)
        // {
        //   temp["B"] = ref.bSponsor;

          
        // }
        // if(ref.cSponsor)
        // {
        //   temp["C"] = ref.cSponsor;

          
        // }
        // if(ref.dSponsor)
        // {
        //   temp["D"] = ref.dSponsor;

          
        // }
        
      //  ref.service.saveSponser(temp);

        ref.getData();

      });
    })

  }

  // getData()
  // {
  //   let ref = this;
  //   this.loader.create({
  //     message:"kérlek várj..."
  //   }).then((ele)=>{

  //   ele.present();
  //   this.service.getData(function(data)
  //   {
  //     ele.dismiss();
  //     if(data)
  //     {
  //     console.log(JSON.stringify(data));
  //     ref.keys = Object.keys(data);
  //     ref.obj = data;
  //     ref.getMetaInfo();

  //     }
  //   })
  // })

  // }

  // getData()
  // {
  //   let ref = this;
  //   this.loader.create({
  //     message:"please wait..."
  //   }).then((ele)=>{

  //   ele.present();
  //   this.service.getData(function(data)
  //   {
  //     ele.dismiss();
  //     if(data)
  //     {
  //     console.log(JSON.stringify(data));
  //     ref.keys = Object.keys(data);
  //     ref.obj = data;


  //     }
  //     else{
  //     ref.getMetaInfo();
  //     ref.keys = [];
  //     ref.obj = {};
  //     }
  //   })
  // })

  // }

  getData() {

    let ref = this;
    this.loader.create({
      message: "kérlek várj..."
    }).then((ele) => {

      ele.present();
      this.service.getData(function (data) {
        ele.dismiss();
        if (data) {
          console.log(JSON.stringify(data));
          ref.keys = Object.keys(data);
          ref.keysTemp = ref.keys;
          ref.obj = data;
          ref.getMetaInfo();
         // ref.getBigFish();
          //ref.service.gettSektorCount();
         // if (ref.init) {
            ref.orderByRoute();
         // }
          // ref.service.getClickedTime(function (data1) {
          //   if (data1) {
          //     ref.clickedtime = data1;
          //   }
          // })
          // ref.service.getSponser().then((r)=>{
          //   console.log(r.val());
          //   if(r.val())
          //   {
          //     ref.sponser = r.val();
          //     if(ref.sponser.A)
          //     {
          //       ref.aSponsor = ref.sponser.A
          //     }
          //     if(ref.sponser.B)
          //     {
          //       ref.bSponsor = ref.sponser.B
          //     }
          //     if(ref.sponser.C)
          //     {
          //       ref.cSponsor = ref.sponser.C
          //     }
          //     if(ref.sponser.D)
          //     {
          //       ref.dSponsor = ref.sponser.D
          //     }
          //   }
          // })


          //ref.calculate();

          //alert(JSON.stringify(keys));
          //   let arr = [];
          //   for(var i = 0;i<keys.length;i++)
          //   {
          //     console.log(data[keys[i]]);
          //    arr = arr.concat(data[keys[i]]);
          //   }
          //  // alert(JSON.stringify(arr));
          //   if(arr.length > 0)
          //   {
          //     ref.fieldArray = [];
          //     ref.fieldArray = arr;
          //   }
        }
        else {
           ref.getMetaInfo();
          // ref.getBigFish();
       ref.keys = [];
       ref.keysTemp = [];
        ref.obj = {};

          // ref.service.getClickedTime(function (data1) {
          //   if (data1) {
          //     ref.clickedtime = data1;
          //   }
          // })
          // ref.service.getSponser().then((r)=>{
          //   console.log(r.val());
          //   if(r.val())
          //   {
          //     ref.sponser = r.val();
          //     if(ref.sponser.A)
          //     {
          //       ref.aSponsor = ref.sponser.A
          //     }
          //     if(ref.sponser.B)
          //     {
          //       ref.bSponsor = ref.sponser.B
          //     }
          //     if(ref.sponser.C)
          //     {
          //       ref.cSponsor = ref.sponser.C
          //     }
          //     if(ref.sponser.D)
          //     {
          //       ref.dSponsor = ref.sponser.D
          //     }
          //   }
          // })

        }
        ref.init = true;
      })
    })

  }
  getSortedDataForSektor(key) {
    var arr = [];
    for (var k = 0; k < this.sorted.length; k++) {
      if (key == this.sorted[k].sektor[0]) {
        arr.push(this.sorted[k]);
      }
    }
    return arr;

  }

  showToast(msg) {
    this.toast.create({
      message: msg,
      duration: 3000
    }).then((ele) => {
      ele.present();
    })
  }

  orderByRoute() {
  
    var routeTemp = [];
    this.routeObj = {};

    for (var i = 0; i < this.keys.length; i++) {
     let key = this.obj[this.keys[i]].route.toString().toLowerCase().trim();
      if (key != "") {
       // sektorTemp.push(ref.obj[ref.keys[i]].sektor[0]);
       this.obj[this.keys[i]].avg = this.obj[this.keys[i]].avg.split('.')[0];
       this.sorted.push(this.obj[this.keys[i]]);
        let arr = [];
       if(this.routeObj[key])
       {
         arr = this.routeObj[key];
         

       }
       arr.push(this.obj[this.keys[i]]);
     arr =   arr.sort(function(a,b)
       {
         return parseFloat(b.avg) - parseFloat(a.avg);
       })
       this.routeObj[key] = arr;
       
      }

    }
    this.sorted.sort(function(a,b)
    {
      return parseFloat(b.avg) - parseFloat(a.avg);
    })
    this.routeKeys = Object.keys(this.routeObj);

    console.log(this.routeObj);
   
  
  }

//new code

disbaledInsertion()
{
  for(let i = 0;i<this.keys.length;i++)
  {
    if(this.obj[this.keys[i]].avg == undefined)
    {
      return true;
    }
  }
  return false;
}

calculateAvg()
{
  for(let i = 0;i<this.keys.length;i++)
  {
    let arr = [];
    if(this.obj[this.keys[i]].row1)
    {
      arr.push(parseInt(this.obj[this.keys[i]].row1));
    }
    if(this.obj[this.keys[i]].row2)
    {
      arr.push(parseInt(this.obj[this.keys[i]].row2));
    }
    if(this.obj[this.keys[i]].row3)
    {
      arr.push(parseInt(this.obj[this.keys[i]].row3));
    }
    
    if(arr.length >= 2)
    {
     arr = arr.sort(function(a, b) {
      return b-a;
    });
     console.log(arr);
     if(arr[0] == 0 || arr[1] == 0)
     {
       console.log("arr = "+arr);
      // if(this.obj[this.keys[i]].avg)
       //{
         this.obj[this.keys[i]]["avg"]= 0.00;
      // }
      
     }else{
     let sum = arr[0] + arr[1];
     console.log(sum);
       this.obj[this.keys[i]].avg =  ((sum)/2).toFixed(2);
     }
    }
  }
}
}



