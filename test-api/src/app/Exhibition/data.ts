// Generated by https://quicktype.io

export class CExhibition {
  version: string;
  UID: string;
  title: string;
  category: string;
  showInfo: CShowInfo[];
  showUnit: string;
  discountInfo: string;
  descriptionFilterHtml: string;
  imageUrl: string;
  masterUnit: string[];
  subUnit: any[];
  supportUnit: any[];
  otherUnit: any[];
  webSales: string;
  sourceWebPromote: string;
  comment: string;
  editModifyDate: string;
  sourceWebName: string;
  startDate: string;
  endDate: string;
  hitRate: number;

  public constructor() {
    this.version = '';
    this.UID = '';
    this.title = '';
    this.category = '';
    this.showInfo = [];
    this.showUnit = '';
    this.discountInfo = '';
    this.descriptionFilterHtml = '';
    this.imageUrl = '';
    this.masterUnit = [];
    this.subUnit = [];
    this.supportUnit = [];
    this.otherUnit = [];
    this.webSales = '';
    this.sourceWebPromote = '';
    this.comment = '';
    this.editModifyDate = '';
    this.sourceWebName = '';
    this.startDate = '';
    this.endDate = '';
    this.hitRate = 0;
  }
}

export class CShowInfo {
  time: string;
  location: string;
  locationName: string;
  onSales: string;
  price: string;
  latitude: string;
  longitude: string;
  endTime: string;

  public constructor() {
    this.time = '';
    this.location = '';
    this.locationName = '';
    this.onSales = '';
    this.price = '';
    this.latitude = '';
    this.longitude = '';
    this.endTime = '';

  }
}
