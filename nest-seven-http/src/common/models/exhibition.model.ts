import { Injectable } from "@nestjs/common";

export class CExnitionRoot {
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

    public constructor(
        version,
        UID,
        title,
        category,
        showInfo,
        showUnit,
        discountInfo,
        descriptionFilterHtml,
        imageUrl,
        masterUnit,
        subUnit,
        supportUnit,
        otherUnit,
        webSales,
        sourceWebPromote,
        comment,
        editModifyDate,
        sourceWebName,
        startDate,
        endDate,
        hitRate

    ) {
        this.version = version;
        this.UID = UID;
        this.title = title;
        this.category = category;
        this.showInfo = showInfo;
        this.showUnit = showUnit;
        this.discountInfo = discountInfo;
        this.descriptionFilterHtml = descriptionFilterHtml;
        this.imageUrl = imageUrl;
        this.masterUnit = masterUnit;
        this.subUnit = subUnit;
        this.supportUnit = supportUnit;
        this.otherUnit = otherUnit;
        this.webSales = webSales;
        this.sourceWebPromote = sourceWebPromote;
        this.comment = comment;
        this.editModifyDate = editModifyDate;
        this.sourceWebName = sourceWebName;
        this.startDate = startDate;
        this.endDate = endDate;
        this.hitRate = hitRate;
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
}

// @Injectable()
// export class ListAdapter {
//     adapt(item: any): CExnitionRoot {
//         return new CExnitionRoot(
//             item.version,
//             item.UID,
//             item.title,
//             item.category,
//             item.showInfo,
//             item.showUnit,
//             item.discountInfo,
//             item.descriptionFilterHtml,
//             item.imageUrl,
//             item.masterUnit,
//             item.subUnit,
//             item.supportUnit,
//             item.otherUnit,
//             item.webSales,
//             item.sourceWebPromote,
//             item.comment,
//             item.editModifyDate,
//             item.sourceWebName,
//             item.startDate,
//             item.endDate,
//             item.hitRate);
//     }
// }