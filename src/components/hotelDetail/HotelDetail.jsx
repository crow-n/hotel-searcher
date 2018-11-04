import React, { PureComponent } from 'react'
import { Link } from "react-router-dom";
import { Icon } from "antd-mobile";
import RoomAccordion from './RoomAccordion';

class HotelDetail extends PureComponent {
  state = {
    detail: {
      "pois": [
        {
          "name": "火车站",
          "type": 10003,
          "subPois": [
            {
              "subName": "成都东站",
              "trafficDesc": "",
              "distance": "9.76"
            }
          ]
        },
        {
          "name": "景点",
          "type": 102,
          "subPois": [
            {
              "subName": "美美力诚百货",
              "trafficDesc": "",
              "distance": "0.913573"
            }
          ]
        },
        {
          "name": "景点",
          "type": 103,
          "subPois": [
            {
              "subName": "成都百货大楼",
              "trafficDesc": "",
              "distance": "0.66862"
            }
          ]
        },
        {
          "name": "景点",
          "type": 104,
          "subPois": [
            {
              "subName": "成都市第三人民医院",
              "trafficDesc": "",
              "distance": "1.34319"
            },
            {
              "subName": "四川大学华西医院",
              "trafficDesc": "",
              "distance": "1.66965"
            },
            {
              "subName": "四川大学华西口腔医院",
              "trafficDesc": "",
              "distance": "1.87555"
            },
            {
              "subName": "四川省人民医院",
              "trafficDesc": "",
              "distance": "1.92076"
            },
            {
              "subName": "成都中医药大学附属医院",
              "trafficDesc": "",
              "distance": "1.94183"
            }
          ]
        },
        {
          "name": "地铁站",
          "type": 201,
          "subPois": [
            {
              "subName": "天府广场",
              "trafficDesc": "",
              "distance": "0.715047"
            },
            {
              "subName": "人民公园",
              "trafficDesc": "",
              "distance": "0.724146"
            },
            {
              "subName": "骡马市",
              "trafficDesc": "",
              "distance": "1.07807"
            },
            {
              "subName": "锦江宾馆",
              "trafficDesc": "",
              "distance": "1.10281"
            },
            {
              "subName": "通惠门",
              "trafficDesc": "",
              "distance": "1.47182"
            },
            {
              "subName": "文殊院",
              "trafficDesc": "",
              "distance": "1.8072"
            },
            {
              "subName": "华西坝",
              "trafficDesc": "",
              "distance": "1.84555"
            },
            {
              "subName": "春熙路",
              "trafficDesc": "",
              "distance": "1.96857"
            }
          ]
        }
      ],
      "debutYear": "2013",
      "hotelStarName": "高档型",
      "introduction": "嘉好悦美酒店（成都天府广场店）位于青羊区文翁路139号，毗邻天府广场、人民公园， 周边有春熙路、盐市口、美美力诚、仁恒置地等大型购物中心，距离宽窄巷子、锦里、武侯祠等景点仅15分钟行程；地理位置优越。\r\n嘉好·悦美酒店（成都天府广场店）是成都首家地中海主题概念酒店。酒店采用智能化管理系统，电梯内设置门禁系统，可最大程度保护您的隐私。酒店拥有各式精品主题房，由台湾著名设计团队打造；房内均配置一体电脑、WIFI，给您的旅途带来无尽惊喜与享受。",
      "policy": [
        {
          "policyDesription": "不同类型的客房附带不同的取消预订和预先付费政策 选择上述客房时，请参阅“客房政策”",
          "policyName": "取消政策",
          "policyType": 0
        },
        {
          "policyDesription": "入住时间：10:00以后      离店时间：13:00以前",
          "policyName": "入住和离店政策",
          "policyType": 0
        },
        {
          "policyDesription": "入住时需要出示政府核发的身份证件(带照片)。请携带信用卡和现金用以支付押金或额外费用。",
          "policyName": "入住手续政策",
          "policyType": 0
        },
        {
          "policyDesription": "信用卡授权解除需时1-3个月。视不同国家、城市之银行操作时间而定。",
          "policyName": "特殊政策",
          "policyType": 0
        },
        {
          "policyDesription": "不可携带宠物。",
          "policyName": "宠物政策",
          "policyType": 0
        }
      ],
      "roomNum": 79,
      "hotelId": 474138,
      "hotelName": "嘉好悦美酒店(成都天府广场店)",
      "cityName": "成都",
      "decorateDate": "2015-08-01 00:00:00",
      "pictures": {
        "picInfos": [
          {
            "firstPic": true,
            "picId": 1184424585,
            "seqNum": 1,
            "status": 0,
            "picName": "头图",
            "path": "http://app1.showapi.com/images/hotel/f78e2543-7898-41b0-a970-613c18f9805d.jpg",
            "height": 0,
            "picSource": 0,
            "delFlag": 0,
            "picType": 901,
            "width": 0
          },
          {
            "firstPic": false,
            "picId": 1184424586,
            "seqNum": 2,
            "status": 0,
            "picName": "外观",
            "path": "http://app1.showapi.com/images/hotel/0a959500-732c-4fdc-99cc-1076f0c058f9.jpg",
            "height": 0,
            "picSource": 0,
            "delFlag": 0,
            "picType": 6,
            "width": 0
          },
          {
            "firstPic": false,
            "picId": 1184424587,
            "seqNum": 3,
            "status": 0,
            "picName": "外观",
            "path": "http://app1.showapi.com/images/hotel/d2d2e3d9-fe89-4679-883c-794281bcf7de.jpg",
            "height": 0,
            "picSource": 0,
            "delFlag": 0,
            "picType": 1,
            "width": 0
          },
          {
            "firstPic": false,
            "picId": 1184424588,
            "seqNum": 4,
            "status": 0,
            "picName": "外观",
            "path": "http://app1.showapi.com/images/hotel/565c03d6-0e1a-456e-9169-4b7acd9a7bf2.jpg",
            "height": 0,
            "picSource": 0,
            "delFlag": 0,
            "picType": 1,
            "width": 0
          },
          {
            "firstPic": false,
            "picId": 1184424592,
            "seqNum": 8,
            "status": 0,
            "picName": "公共区域",
            "path": "http://app1.showapi.com/images/hotel/f7ba6c7b-7a46-4fde-a53a-f23f58dede37.jpg",
            "height": 0,
            "picSource": 0,
            "delFlag": 0,
            "picType": 16,
            "width": 0
          },
          {
            "firstPic": false,
            "picId": 1184424593,
            "seqNum": 9,
            "status": 0,
            "picName": "客房",
            "path": "http://app1.showapi.com/images/hotel/dbf560ca-139b-40d0-80de-04d1a503ba00.jpg",
            "height": 0,
            "picSource": 0,
            "delFlag": 0,
            "picType": 6,
            "width": 0
          },
          {
            "firstPic": false,
            "picId": 1184424594,
            "seqNum": 10,
            "status": 0,
            "picName": "客房",
            "path": "http://app1.showapi.com/images/hotel/58ddb8d9-a551-4a71-a5ea-0340c25df6b1.jpg",
            "height": 0,
            "picSource": 0,
            "delFlag": 0,
            "picType": 6,
            "width": 0
          },
          {
            "firstPic": false,
            "picId": 1184424595,
            "seqNum": 11,
            "status": 0,
            "picName": "客房",
            "path": "http://app1.showapi.com/images/hotel/bce5d3c2-1a8c-40a5-8e1d-0a2ec4a3f0b6.jpg",
            "height": 0,
            "picSource": 0,
            "delFlag": 0,
            "picType": 6,
            "width": 0
          },
          {
            "firstPic": false,
            "picId": 1184424596,
            "seqNum": 12,
            "status": 0,
            "picName": "客房",
            "path": "http://app1.showapi.com/images/hotel/cfd145a0-6379-4e95-902d-6aeb7ea18ee5.jpg",
            "height": 0,
            "picSource": 0,
            "delFlag": 0,
            "picType": 6,
            "width": 0
          },
          {
            "firstPic": false,
            "picId": 1184424597,
            "seqNum": 13,
            "status": 0,
            "picName": "客房",
            "path": "http://app1.showapi.com/images/hotel/be93f1cc-7bdc-4ef7-b59f-937c2041e15f.jpg",
            "height": 0,
            "picSource": 0,
            "delFlag": 0,
            "picType": 6,
            "width": 0
          },
          {
            "firstPic": false,
            "picId": 1184424598,
            "seqNum": 14,
            "status": 0,
            "picName": "客房",
            "path": "http://app1.showapi.com/images/hotel/73e59bac-25eb-4e44-81aa-f63b745f440a.jpg",
            "height": 0,
            "picSource": 0,
            "delFlag": 0,
            "picType": 6,
            "width": 0
          },
          {
            "firstPic": false,
            "picId": 1184424599,
            "seqNum": 15,
            "status": 0,
            "picName": "客房",
            "path": "http://app1.showapi.com/images/hotel/c66036eb-c52f-4c38-9d68-c99144ea0009.jpg",
            "height": 0,
            "picSource": 0,
            "delFlag": 0,
            "picType": 6,
            "width": 0
          },
          {
            "firstPic": false,
            "picId": 1184424600,
            "seqNum": 16,
            "status": 0,
            "picName": "客房",
            "path": "http://app1.showapi.com/images/hotel/c8f34fd2-c03a-4efd-98c5-19fd75c11f1c.jpg",
            "height": 0,
            "picSource": 0,
            "delFlag": 0,
            "picType": 6,
            "width": 0
          },
          {
            "firstPic": false,
            "picId": 1184424601,
            "seqNum": 17,
            "status": 0,
            "picName": "客房",
            "path": "http://app1.showapi.com/images/hotel/d1a51a82-55af-44af-b0cf-f11c5274d3a7.jpg",
            "height": 0,
            "picSource": 0,
            "delFlag": 0,
            "picType": 6,
            "width": 0
          },
          {
            "firstPic": false,
            "picId": 1184424602,
            "seqNum": 18,
            "status": 0,
            "picName": "客房",
            "path": "http://app1.showapi.com/images/hotel/4c219766-fb63-4a53-bc58-41ace7172b5b.jpg",
            "height": 0,
            "picSource": 0,
            "delFlag": 0,
            "picType": 6,
            "width": 0
          },
          {
            "firstPic": false,
            "picId": 1184424603,
            "seqNum": 19,
            "status": 0,
            "picName": "客房",
            "path": "http://app1.showapi.com/images/hotel/946574c3-5e72-44f4-b7f6-79c5fac99076.jpg",
            "height": 0,
            "picSource": 0,
            "delFlag": 0,
            "picType": 6,
            "width": 0
          },
          {
            "firstPic": false,
            "picId": 1184424604,
            "seqNum": 20,
            "status": 0,
            "picName": "客房",
            "path": "http://app1.showapi.com/images/hotel/e01d0036-f3b1-4cb7-92e0-0ab1aef0e9d0.jpg",
            "height": 0,
            "picSource": 0,
            "delFlag": 0,
            "picType": 6,
            "width": 0
          },
          {
            "firstPic": false,
            "picId": 1184424605,
            "seqNum": 21,
            "status": 0,
            "picName": "客房",
            "path": "http://app1.showapi.com/images/hotel/c044be9b-8486-49a0-8b4a-2ed3c28a517a.jpg",
            "height": 0,
            "picSource": 0,
            "delFlag": 0,
            "picType": 6,
            "width": 0
          },
          {
            "firstPic": false,
            "picId": 1184424606,
            "seqNum": 22,
            "status": 0,
            "picName": "客房",
            "path": "http://app1.showapi.com/images/hotel/a2b72b11-ca8a-4a1b-a4be-1b6bcccfe6a5.jpg",
            "height": 0,
            "picSource": 0,
            "delFlag": 0,
            "picType": 6,
            "width": 0
          },
          {
            "firstPic": false,
            "picId": 1184424607,
            "seqNum": 23,
            "status": 0,
            "picName": "客房",
            "path": "http://app1.showapi.com/images/hotel/9e5ce658-4cd6-40e7-bd1e-2cc12a59c3d4.jpg",
            "height": 0,
            "picSource": 0,
            "delFlag": 0,
            "picType": 6,
            "width": 0
          },
          {
            "firstPic": false,
            "picId": 1184424608,
            "seqNum": 24,
            "status": 0,
            "picName": "客房",
            "path": "http://app1.showapi.com/images/hotel/4193ec52-cba8-4df3-b15d-95fa3e67b3bc.jpg",
            "height": 0,
            "picSource": 0,
            "delFlag": 0,
            "picType": 6,
            "width": 0
          },
          {
            "firstPic": false,
            "picId": 1184424609,
            "seqNum": 25,
            "status": 0,
            "picName": "客房",
            "path": "http://app1.showapi.com/images/hotel/b564f49c-4b07-4826-9c6e-06d46e3a8288.jpg",
            "height": 0,
            "picSource": 0,
            "delFlag": 0,
            "picType": 6,
            "width": 0
          },
          {
            "firstPic": false,
            "picId": 1184424610,
            "seqNum": 26,
            "status": 0,
            "picName": "餐厅",
            "path": "http://app1.showapi.com/images/hotel/c84301d1-2a34-4c28-9388-3820a5be62c2.jpg",
            "height": 0,
            "picSource": 0,
            "delFlag": 0,
            "picType": 4,
            "width": 0
          },
          {
            "firstPic": false,
            "picId": 1184424611,
            "seqNum": 27,
            "status": 0,
            "picName": "餐厅",
            "path": "http://app1.showapi.com/images/hotel/b399c7a6-735a-41cd-a872-daba612669ae.jpg",
            "height": 0,
            "picSource": 0,
            "delFlag": 0,
            "picType": 4,
            "width": 0
          },
          {
            "firstPic": false,
            "picId": 1184424612,
            "seqNum": 28,
            "status": 0,
            "picName": "餐厅",
            "path": "http://app1.showapi.com/images/hotel/e5ace0cc-ad08-47b2-8599-5c85dad1e787.jpg",
            "height": 0,
            "picSource": 0,
            "delFlag": 0,
            "picType": 4,
            "width": 0
          },
          {
            "firstPic": false,
            "picId": 1186267761,
            "seqNum": 31000,
            "status": 0,
            "picName": "餐厅",
            "path": "http://app1.showapi.com/images/hotel/3206e824-72a6-4081-80c6-e6f8a043044a.jpg",
            "height": 0,
            "picSource": 0,
            "delFlag": 0,
            "picType": 4,
            "width": 0
          },
          {
            "firstPic": false,
            "picId": 1186267762,
            "seqNum": 31000,
            "status": 0,
            "picName": "酒店大堂",
            "path": "http://app1.showapi.com/images/hotel/11b7890d-2f8c-4f95-9c07-86f4918116fa.jpg",
            "height": 0,
            "picSource": 0,
            "delFlag": 0,
            "picType": 2,
            "width": 0
          },
          {
            "firstPic": false,
            "picId": 1186267763,
            "seqNum": 31000,
            "status": 0,
            "picName": "酒店大堂",
            "path": "http://app1.showapi.com/images/hotel/ceea632c-df5e-4882-bde2-e68d162cac26.jpg",
            "height": 0,
            "picSource": 0,
            "delFlag": 0,
            "picType": 2,
            "width": 0
          },
          {
            "firstPic": false,
            "picId": 1186267764,
            "seqNum": 31000,
            "status": 0,
            "picName": "酒店大堂",
            "path": "http://app1.showapi.com/images/hotel/250422f6-af08-415a-af22-67400bb90daa.jpg",
            "height": 0,
            "picSource": 0,
            "delFlag": 0,
            "picType": 2,
            "width": 0
          },
          {
            "firstPic": false,
            "picId": 1186267765,
            "seqNum": 31000,
            "status": 0,
            "picName": "酒店外观",
            "path": "http://app1.showapi.com/images/hotel/dbcc644a-2ac8-40a0-aa0a-999494382d48.jpg",
            "height": 0,
            "picSource": 0,
            "delFlag": 0,
            "picType": 1,
            "width": 0
          },
          {
            "firstPic": false,
            "picId": 1186267766,
            "seqNum": 31000,
            "status": 0,
            "picName": "酒店外观",
            "path": "http://app1.showapi.com/images/hotel/20ffb6a2-9442-4f9f-b42c-7c66c14dc7fd.jpg",
            "height": 0,
            "picSource": 0,
            "delFlag": 0,
            "picType": 1,
            "width": 0
          },
          {
            "firstPic": false,
            "picId": 1186267768,
            "seqNum": 31000,
            "status": 0,
            "picName": "hotelPic",
            "path": "http://app1.showapi.com/images/hotel/3e89bc77-df64-4678-b8b9-41ea241b3086.jpg",
            "height": 0,
            "picSource": 0,
            "delFlag": 0,
            "picType": 20,
            "width": 0
          },
          {
            "firstPic": false,
            "picId": 1186267769,
            "seqNum": 31000,
            "status": 0,
            "picName": "hotelPic",
            "path": "http://app1.showapi.com/images/hotel/c0a012a1-29ba-4191-a866-43e85398327a.jpg",
            "height": 0,
            "picSource": 0,
            "delFlag": 0,
            "picType": 20,
            "width": 0
          },
          {
            "firstPic": false,
            "picId": 1186267770,
            "seqNum": 31000,
            "status": 0,
            "picName": "hotelPic",
            "path": "http://app1.showapi.com/images/hotel/eb71c258-b613-4c5e-bd58-d135d8f4b586.jpg",
            "height": 0,
            "picSource": 0,
            "delFlag": 0,
            "picType": 20,
            "width": 0
          },
          {
            "firstPic": false,
            "picId": 1186267771,
            "seqNum": 31000,
            "status": 0,
            "picName": "hotelPic",
            "path": "http://app1.showapi.com/images/hotel/27fdd647-89bd-4627-bf90-0acbc8adc432.jpg",
            "height": 0,
            "picSource": 0,
            "delFlag": 0,
            "picType": 20,
            "width": 0
          },
          {
            "firstPic": false,
            "picId": 1186267772,
            "seqNum": 31000,
            "status": 0,
            "picName": "hotelPic",
            "path": "http://app1.showapi.com/images/hotel/2c40108b-8fa2-48da-89a0-0f2f8a48ec91.jpg",
            "height": 0,
            "picSource": 0,
            "delFlag": 0,
            "picType": 20,
            "width": 0
          },
          {
            "firstPic": false,
            "picId": 1186267773,
            "seqNum": 31000,
            "status": 0,
            "picName": "hotelPic",
            "path": "http://app1.showapi.com/images/hotel/2c84037e-8c47-4c10-a4e8-d03505952d98.jpg",
            "height": 0,
            "picSource": 0,
            "delFlag": 0,
            "picType": 20,
            "width": 0
          },
          {
            "firstPic": false,
            "picId": 1186267774,
            "seqNum": 31000,
            "status": 0,
            "picName": "hotelPic",
            "path": "http://app1.showapi.com/images/hotel/be31896e-ce11-48b9-a6ee-f984bef1cd35.jpg",
            "height": 0,
            "picSource": 0,
            "delFlag": 0,
            "picType": 20,
            "width": 0
          },
          {
            "firstPic": false,
            "picId": 1186267780,
            "seqNum": 31000,
            "status": 0,
            "picName": "hotelPic",
            "path": "http://app1.showapi.com/images/hotel/1db97b7d-3ca7-4f48-916b-4d15a4dbd0f0.jpg",
            "height": 0,
            "picSource": 0,
            "delFlag": 0,
            "picType": 20,
            "width": 0
          },
          {
            "firstPic": false,
            "picId": 1188972056,
            "seqNum": 31000,
            "status": 0,
            "picName": "酒店外观",
            "path": "http://app1.showapi.com/images/hotel/e79a7be6-7871-42ab-b565-f6c7e5838eee.jpg",
            "height": 0,
            "picSource": 0,
            "delFlag": 0,
            "picType": 1,
            "width": 0
          },
          {
            "firstPic": false,
            "picId": 1189088883,
            "seqNum": 31000,
            "status": 0,
            "picName": "酒店外观",
            "path": "http://app1.showapi.com/images/hotel/68a886df-27f0-4858-9455-3664b1120eec.jpg",
            "height": 0,
            "picSource": 0,
            "delFlag": 0,
            "picType": 1,
            "width": 0
          },
          {
            "firstPic": false,
            "picId": 1189088884,
            "seqNum": 31000,
            "status": 0,
            "picName": "酒店外观",
            "path": "http://app1.showapi.com/images/hotel/2d0290b1-7a0e-4393-ab81-ef3eef1f4ff2.jpg",
            "height": 0,
            "picSource": 0,
            "delFlag": 0,
            "picType": 1,
            "width": 0
          },
          {
            "firstPic": false,
            "picId": 1189088885,
            "seqNum": 31000,
            "status": 0,
            "picName": "酒店外观",
            "path": "http://app1.showapi.com/images/hotel/48232ad6-b516-47f1-b3d2-1639f9cfe049.jpg",
            "height": 0,
            "picSource": 0,
            "delFlag": 0,
            "picType": 1,
            "width": 0
          },
          {
            "firstPic": false,
            "picId": 1189088887,
            "seqNum": 31000,
            "status": 0,
            "picName": "酒店外观",
            "path": "http://app1.showapi.com/images/hotel/e946a538-e4fa-4267-9358-8b742a4bce9f.jpg",
            "height": 0,
            "picSource": 0,
            "delFlag": 0,
            "picType": 1,
            "width": 0
          },
          {
            "firstPic": false,
            "picId": 1189088888,
            "seqNum": 31000,
            "status": 0,
            "picName": "酒店外观",
            "path": "http://app1.showapi.com/images/hotel/950dfd12-4ef4-482e-902c-617204ec0a59.jpg",
            "height": 0,
            "picSource": 0,
            "delFlag": 0,
            "picType": 1,
            "width": 0
          },
          {
            "firstPic": false,
            "picId": 1189088889,
            "seqNum": 31000,
            "status": 0,
            "picName": "酒店外观",
            "path": "http://app1.showapi.com/images/hotel/122faf7d-196d-4de8-b5d4-a38674246e27.jpg",
            "height": 0,
            "picSource": 0,
            "delFlag": 0,
            "picType": 1,
            "width": 0
          },
          {
            "firstPic": false,
            "picId": 1189088890,
            "seqNum": 31000,
            "status": 0,
            "picName": "hotelPic",
            "path": "http://app1.showapi.com/images/hotel/2950b9b5-f0c0-420e-8572-7753ddd7a1e1.jpg",
            "height": 0,
            "picSource": 0,
            "delFlag": 0,
            "picType": 20,
            "width": 0
          },
          {
            "firstPic": false,
            "picId": 1190591691,
            "seqNum": 31000,
            "status": 0,
            "picName": "hotelPic",
            "path": "http://app1.showapi.com/images/hotel/c970be79-41a0-4868-a29d-7d8b41667536.jpg",
            "height": 0,
            "picSource": 0,
            "delFlag": 0,
            "picType": 20,
            "width": 0
          }
        ],
        "picCount": 48
      },
      "cityCode": 2802,
      "services": [
        {
          "subServices": [
            {
              "subName": "票务服务",
              "subType": 2,
              "subCode": 12
            },
            {
              "subName": "洗衣服务",
              "subType": 2,
              "subCode": 15
            },
            {
              "subName": "限时送餐",
              "subType": 2,
              "subCode": 16
            },
            {
              "subName": "出租车",
              "subType": 2,
              "subCode": 55
            },
            {
              "subName": "邮政服务",
              "subType": 2,
              "subCode": 69
            },
            {
              "subName": "前台保险柜",
              "subType": 2,
              "subCode": 95
            },
            {
              "subName": "专职行李员",
              "subType": 2,
              "subCode": 96
            },
            {
              "subName": "行李寄存",
              "subType": 2,
              "subCode": 97
            },
            {
              "subName": "叫醒服务",
              "subType": 2,
              "subCode": 98
            },
            {
              "subName": "自动取款机",
              "subType": 2,
              "subCode": 99
            },
            {
              "subName": "免费停车场",
              "subType": 2,
              "subCode": 100
            },
            {
              "subName": "免费地图",
              "subType": 2,
              "subCode": 103
            },
            {
              "subName": "大堂吧",
              "subType": 2,
              "subCode": 106
            },
            {
              "subName": "滚梯/电梯",
              "subType": 2,
              "subCode": 110
            },
            {
              "subName": "礼宾服务",
              "subType": 2,
              "subCode": 127
            },
            {
              "subName": "干洗",
              "subType": 2,
              "subCode": 128
            },
            {
              "subName": "熨衣服务",
              "subType": 2,
              "subCode": 130
            },
            {
              "subName": "管家服务",
              "subType": 2,
              "subCode": 139
            },
            {
              "subName": "24小时前台服务",
              "subType": 2,
              "subCode": 140
            },
            {
              "subName": "信用卡结算服务",
              "subType": 2,
              "subCode": 162
            },
            {
              "subName": "一次性账单结算服务",
              "subType": 2,
              "subCode": 163
            },
            {
              "subName": "商务服务",
              "subType": 2,
              "subCode": 168
            },
            {
              "subName": "外送洗衣服务",
              "subType": 2,
              "subCode": 178
            },
            {
              "subName": "轮椅",
              "subType": 2,
              "subCode": 313
            }
          ],
          "name": "宾馆服务项目",
          "code": 1
        },
        {
          "subServices": [
            {
              "subName": "中餐厅",
              "subType": 2,
              "subCode": 1
            },
            {
              "subName": "西餐厅",
              "subType": 2,
              "subCode": 2
            }
          ],
          "name": "宾馆餐饮设施",
          "code": 2
        },
        {
          "subServices": [
            {
              "subName": "国内长途电话",
              "subType": 2,
              "subCode": 13
            },
            {
              "subName": "国际长途电话",
              "subType": 2,
              "subCode": 14
            },
            {
              "subName": "拖鞋",
              "subType": 2,
              "subCode": 75
            },
            {
              "subName": "独立写字台",
              "subType": 2,
              "subCode": 77
            },
            {
              "subName": "浴室化妆放大镜",
              "subType": 2,
              "subCode": 78
            },
            {
              "subName": "24小时热水",
              "subType": 2,
              "subCode": 79
            },
            {
              "subName": "电热水壶",
              "subType": 2,
              "subCode": 80
            },
            {
              "subName": "免费洗漱用品",
              "subType": 2,
              "subCode": 82
            },
            {
              "subName": "迷你酒吧",
              "subType": 2,
              "subCode": 85
            },
            {
              "subName": "小冰箱",
              "subType": 2,
              "subCode": 87
            },
            {
              "subName": "浴衣",
              "subType": 2,
              "subCode": 88
            },
            {
              "subName": "多规格插座",
              "subType": 2,
              "subCode": 89
            },
            {
              "subName": "110V插座",
              "subType": 2,
              "subCode": 90
            },
            {
              "subName": "浴缸",
              "subType": 2,
              "subCode": 91
            },
            {
              "subName": "独立淋浴间",
              "subType": 2,
              "subCode": 92
            },
            {
              "subName": "吹风机",
              "subType": 2,
              "subCode": 93
            },
            {
              "subName": "保险箱",
              "subType": 2,
              "subCode": 94
            },
            {
              "subName": "中央空调",
              "subType": 2,
              "subCode": 107
            },
            {
              "subName": "有可无线上网的公共区域 免费",
              "subType": 2,
              "subCode": 120
            },
            {
              "subName": "大堂免费报纸",
              "subType": 2,
              "subCode": 145
            },
            {
              "subName": "多功能厅",
              "subType": 2,
              "subCode": 164
            },
            {
              "subName": "公共音响系统",
              "subType": 2,
              "subCode": 170
            },
            {
              "subName": "非经营性客人休息区",
              "subType": 2,
              "subCode": 171
            },
            {
              "subName": "多媒体系统",
              "subType": 2,
              "subCode": 176
            },
            {
              "subName": "公共区域监控",
              "subType": 2,
              "subCode": 177
            }
          ],
          "name": "宾馆房间设施",
          "code": 4
        }
      ],
      "address": "青羊区文翁路139号",
      "location": {
        "latitudeGoogle": "30.653547",
        "longitudeGoogle": "104.05998"
      },
      "hotelTel": "028-62050333"
    },
    rooms: [
      {
        "isExtraBed": "不可加床",
        "facilities": [
          {
            "tmpSubFacilities": [
              {
                "subName": "国内长途电话",
                "subType": 1,
                "subCode": 38
              },
              {
                "subName": "国际长途电话",
                "subType": 1,
                "subCode": 39
              },
              {
                "subName": "电话",
                "subType": 1,
                "subCode": 40
              },
              {
                "subName": "有线频道",
                "subType": 1,
                "subCode": 42
              },
              {
                "subName": "卫星频道",
                "subType": 1,
                "subCode": 43
              },
              {
                "subName": "液晶电视机",
                "subType": 1,
                "subCode": 44
              },
              {
                "subName": "电脑",
                "subType": 2,
                "subCode": 48
              }
            ],
            "name": "媒体/科技",
            "code": 2
          },
          {
            "tmpSubFacilities": [
              {
                "subName": "免费洗漱用品(6样以上)",
                "subType": 1,
                "subCode": 74
              },
              {
                "subName": "无免费洗漱用品",
                "subType": 1,
                "subCode": 76
              },
              {
                "subName": "24小时热水",
                "subType": 1,
                "subCode": 77
              },
              {
                "subName": "浴缸",
                "subType": 1,
                "subCode": 81
              },
              {
                "subName": "淋浴",
                "subType": 1,
                "subCode": 84
              },
              {
                "subName": "浴室",
                "subType": 1,
                "subCode": 85
              },
              {
                "subName": "独立淋浴间",
                "subType": 1,
                "subCode": 86
              },
              {
                "subName": "吹风机",
                "subType": 1,
                "subCode": 89
              },
              {
                "subName": "拖鞋",
                "subType": 1,
                "subCode": 91
              },
              {
                "subName": "浴衣",
                "subType": 1,
                "subCode": 92
              },
              {
                "subName": "浴室化妆放大镜",
                "subType": 1,
                "subCode": 93
              },
              {
                "subName": "洗浴间电话",
                "subType": 1,
                "subCode": 95
              }
            ],
            "name": "浴室",
            "code": 4
          },
          {
            "tmpSubFacilities": [
              {
                "subName": "唤醒服务",
                "subType": 1,
                "subCode": 109
              },
              {
                "subName": "欢迎礼品",
                "subType": 1,
                "subCode": 110
              },
              {
                "subName": "免费报纸",
                "subType": 1,
                "subCode": 112
              },
              {
                "subName": "空气检测器",
                "subType": 1,
                "subCode": 119
              }
            ],
            "name": "服务及其他",
            "code": 6
          },
          {
            "tmpSubFacilities": [
              {
                "subName": "多种规格电源插座",
                "subType": 1,
                "subCode": 1
              },
              {
                "subName": "220V电压插座",
                "subType": 1,
                "subCode": 3
              },
              {
                "subName": "遮光窗帘",
                "subType": 1,
                "subCode": 6
              },
              {
                "subName": "手动窗帘",
                "subType": 1,
                "subCode": 8
              },
              {
                "subName": "房内保险箱",
                "subType": 1,
                "subCode": 10
              },
              {
                "subName": "书桌",
                "subType": 1,
                "subCode": 11
              },
              {
                "subName": "沙发",
                "subType": 1,
                "subCode": 12
              },
              {
                "subName": "坐卧两用长沙发",
                "subType": 1,
                "subCode": 13
              },
              {
                "subName": "床具:鸭绒被",
                "subType": 1,
                "subCode": 16
              },
              {
                "subName": "床具:毯子或被子",
                "subType": 1,
                "subCode": 17
              },
              {
                "subName": "电子秤",
                "subType": 1,
                "subCode": 19
              },
              {
                "subName": "闹钟",
                "subType": 1,
                "subCode": 20
              },
              {
                "subName": "针线包",
                "subType": 1,
                "subCode": 21
              },
              {
                "subName": "衣柜/衣橱",
                "subType": 1,
                "subCode": 25
              },
              {
                "subName": "中央空调",
                "subType": 1,
                "subCode": 28
              },
              {
                "subName": "开夜床",
                "subType": 1,
                "subCode": 34
              },
              {
                "subName": "房间内高速上网",
                "subType": 1,
                "subCode": 35
              },
              {
                "subName": "客房WIFI覆盖免费",
                "subType": 1,
                "subCode": 37
              }
            ],
            "name": "便利设施",
            "code": 1
          },
          {
            "tmpSubFacilities": [
              {
                "subName": "电热水壶",
                "subType": 1,
                "subCode": 65
              },
              {
                "subName": "迷你吧",
                "subType": 1,
                "subCode": 67
              },
              {
                "subName": "小冰箱",
                "subType": 1,
                "subCode": 68
              }
            ],
            "name": "食品和饮品",
            "code": 3
          },
          {
            "tmpSubFacilities": [
              {
                "subName": "阳台",
                "subType": 1,
                "subCode": 106
              }
            ],
            "name": "室外/景观",
            "code": 5
          }
        ],
        "roomId": 221806889,
        "area": "28平方米",
        "floor": "3-6层",
        "roomLowestPrice": 309,
        "noSmoking": "可全部无烟处理",
        "pictures": {
          "pics": [
            {
              "firstPic": false,
              "picId": 14821605,
              "seqNum": 0,
              "status": 0,
              "picName": "客房",
              "path": "http://app1.showapi.com/images/hotel/7d6a6252-c9fc-44b1-a72e-eaff1da8b3af.jpg",
              "height": 0,
              "picSource": 6,
              "delFlag": 0,
              "picType": 3,
              "width": 0
            },
            {
              "firstPic": false,
              "picId": 14821606,
              "seqNum": 0,
              "status": 0,
              "picName": "客房",
              "path": "http://app1.showapi.com/images/hotel/802bbc3e-e6d9-4c5b-b3bf-25b12988009e.jpg",
              "height": 0,
              "picSource": 6,
              "delFlag": 0,
              "picType": 3,
              "width": 0
            },
            {
              "firstPic": false,
              "picId": 14821608,
              "seqNum": 0,
              "status": 0,
              "picName": "客房",
              "path": "http://app1.showapi.com/images/hotel/7fc250a0-2248-4146-9223-328d0dc25e27.jpg",
              "height": 0,
              "picSource": 6,
              "delFlag": 0,
              "picType": 3,
              "width": 0
            },
            {
              "firstPic": false,
              "picId": 17881245,
              "seqNum": 0,
              "status": 0,
              "picName": "客房",
              "path": "http://app1.showapi.com/images/hotel/d7c49045-8267-4d21-9522-ebfbdb423cd9.jpg",
              "height": 0,
              "picSource": 6,
              "delFlag": 0,
              "picType": 3,
              "width": 0
            },
            {
              "firstPic": false,
              "picId": 10022270,
              "seqNum": 1,
              "status": 0,
              "picName": "客房",
              "path": "http://app1.showapi.com/images/hotel/c52bd445-bbd6-4573-acbb-a90bad3eaefe.jpg",
              "height": 0,
              "picSource": 6,
              "delFlag": 0,
              "picType": 3,
              "width": 0
            },
            {
              "firstPic": false,
              "picId": 10022271,
              "seqNum": 2,
              "status": 0,
              "picName": "客房",
              "path": "http://app1.showapi.com/images/hotel/cdd0b0f4-d34d-491c-9458-177c2830e64b.jpg",
              "height": 0,
              "picSource": 6,
              "delFlag": 0,
              "picType": 3,
              "width": 0
            },
            {
              "firstPic": false,
              "picId": 10022272,
              "seqNum": 3,
              "status": 0,
              "picName": "客房",
              "path": "http://app1.showapi.com/images/hotel/e3e2f71f-10dc-4ec7-b7a5-29cedd822149.jpg",
              "height": 0,
              "picSource": 6,
              "delFlag": 0,
              "picType": 3,
              "width": 0
            },
            {
              "firstPic": false,
              "picId": 10022273,
              "seqNum": 4,
              "status": 0,
              "picName": "客房",
              "path": "http://app1.showapi.com/images/hotel/b6044926-137a-4c2c-9308-69f682e4b077.jpg",
              "height": 0,
              "picSource": 6,
              "delFlag": 0,
              "picType": 3,
              "width": 0
            },
            {
              "firstPic": false,
              "picId": 10022274,
              "seqNum": 5,
              "status": 0,
              "picName": "客房",
              "path": "http://app1.showapi.com/images/hotel/1333f76e-8b08-4afb-9cde-de353165ac5e.jpg",
              "height": 0,
              "picSource": 6,
              "delFlag": 0,
              "picType": 3,
              "width": 0
            },
            {
              "firstPic": false,
              "picId": 10022275,
              "seqNum": 6,
              "status": 0,
              "picName": "客房",
              "path": "http://app1.showapi.com/images/hotel/918dc98e-eaf7-4e71-994a-741e6ed4d47e.jpg",
              "height": 0,
              "picSource": 6,
              "delFlag": 0,
              "picType": 3,
              "width": 0
            }
          ],
          "picCount": 10
        },
        "source": 1,
        "bedDescription": "大床 1.8米",
        "isExtraBedNum": "2人",
        "roomNameCn": "美致大床房",
        "ratePlanInfo": [
          {
            "invoiceType": 0,
            "wifi": "免费有线",
            "averagePrice": 326,
            "taxAndFeePrice": 0,
            "restNum": 0,
            "broadband": "免费有线",
            "mealInfo": "餐食：房价不包含早餐",
            "priceCalendar": [
              {
                "roomRate": "325.48",
                "taxAndFee": "0",
                "date": "2018-11-04",
                "prices": "325.48"
              },
              {
                "roomRate": "325.48",
                "taxAndFee": "0",
                "date": "2018-11-05",
                "prices": "325.48"
              }
            ],
            "roomType": {
              "code": "221806889",
              "name": ""
            },
            "bedType": "大床",
            "payType": "线上预付",
            "promotionRules": [],
            "name": "标准价",
            "maxOccupancy": 2,
            "networkInfo": "无线:不确定 免费有线",
            "bedTypeInfo": {
              "beds": [
                {
                  "size": "",
                  "count": 1,
                  "code": "QUEEN",
                  "seq": "1",
                  "desc": "大床"
                }
              ],
              "relation": ""
            },
            "id": "1_200_23690_1916676085",
            "breakfast": "无早",
            "cancel": {
              "name": "不可取消",
              "desc": "订单确认成功后，不可取消修改，如未入住或取消修改及提前离店，我们将收取您全额房费（含税费）",
              "type": "1"
            },
            "instantConfirm": true,
            "available": "立即确认",
            "ratePrice": 326,
            "bedInfo": "1张大床"
          },
          {
            "invoiceType": 0,
            "id": "1_200_27478_1768960288",
            "averagePrice": 309,
            "taxAndFeePrice": 0,
            "restNum": 8,
            "broadband": "免费无线",
            "mealInfo": "餐食：房价不包含早餐",
            "priceCalendar": [
              {
                "roomRate": "309.00",
                "taxAndFee": "0",
                "date": "2018-11-04",
                "prices": "309.00"
              },
              {
                "roomRate": "309.00",
                "taxAndFee": "0",
                "date": "2018-11-05",
                "prices": "309.00"
              }
            ],
            "roomType": {
              "code": "221806889",
              "name": ""
            },
            "wifi": "免费无线",
            "promotionRules": [
              {
                "value": "0",
                "unit": "HOUR",
                "code": "ADVANCE"
              }
            ],
            "payType": "线上预付",
            "maxOccupancy": 2,
            "name": "美致大床房[无早](酒店直采)",
            "bedType": "大床",
            "networkInfo": "免费无线 有线:不确定",
            "bedTypeInfo": {
              "beds": [
                {
                  "size": "",
                  "count": 1,
                  "code": "QUEEN",
                  "seq": "1",
                  "desc": "大床"
                }
              ],
              "relation": ""
            },
            "guestType": "1",
            "breakfast": "无早",
            "cancel": {
              "name": "限时取消",
              "desc": "2018-11-04 16:00:00前可免费取消修改；若未入住或过时取消修改及提前离店，我们将收取您¥660.0支付给酒店。",
              "type": "2"
            },
            "instantConfirm": false,
            "available": "",
            "ratePrice": 309,
            "bedInfo": "1张大床"
          },
          {
            "invoiceType": 0,
            "wifi": "免费有线",
            "averagePrice": 346,
            "taxAndFeePrice": 0,
            "restNum": 0,
            "broadband": "免费有线",
            "mealInfo": "餐食: 每天1人早餐",
            "priceCalendar": [
              {
                "roomRate": "345.05",
                "taxAndFee": "0",
                "date": "2018-11-04",
                "prices": "345.05"
              },
              {
                "roomRate": "345.05",
                "taxAndFee": "0",
                "date": "2018-11-05",
                "prices": "345.05"
              }
            ],
            "roomType": {
              "code": "221806889",
              "name": ""
            },
            "bedType": "大床",
            "payType": "线上预付",
            "promotionRules": [],
            "name": "标准价",
            "maxOccupancy": 2,
            "networkInfo": "无线:不确定 免费有线",
            "bedTypeInfo": {
              "beds": [
                {
                  "size": "",
                  "count": 1,
                  "code": "QUEEN",
                  "seq": "1",
                  "desc": "大床"
                }
              ],
              "relation": ""
            },
            "id": "1_200_23690_1916676088",
            "breakfast": "单早",
            "cancel": {
              "name": "不可取消",
              "desc": "订单确认成功后，不可取消修改，如未入住或取消修改及提前离店，我们将收取您全额房费（含税费）",
              "type": "1"
            },
            "instantConfirm": true,
            "available": "立即确认",
            "ratePrice": 346,
            "bedInfo": "1张大床"
          },
          {
            "invoiceType": 0,
            "id": "1_200_27478_1768965220",
            "averagePrice": 335,
            "taxAndFeePrice": 0,
            "restNum": 8,
            "broadband": "免费",
            "mealInfo": "餐食: 每天2人早餐",
            "priceCalendar": [
              {
                "roomRate": "334.75",
                "taxAndFee": "0",
                "date": "2018-11-04",
                "prices": "334.75"
              },
              {
                "roomRate": "334.75",
                "taxAndFee": "0",
                "date": "2018-11-05",
                "prices": "334.75"
              }
            ],
            "roomType": {
              "code": "221806889",
              "name": ""
            },
            "wifi": "免费",
            "promotionRules": [
              {
                "value": "2",
                "unit": "HOUR",
                "code": "ADVANCE"
              }
            ],
            "payType": "线上预付",
            "maxOccupancy": 2,
            "name": "美致大床房[双早](美致大床房赠68早餐)",
            "bedType": "大床",
            "networkInfo": "免费无线 免费有线",
            "bedTypeInfo": {
              "beds": [
                {
                  "size": "",
                  "count": 1,
                  "code": "QUEEN",
                  "seq": "1",
                  "desc": "大床"
                }
              ],
              "relation": ""
            },
            "guestType": "1",
            "breakfast": "双早",
            "cancel": {
              "name": "限时取消",
              "desc": "2018-11-04 16:00:00前可免费取消修改；若未入住或过时取消修改及提前离店，我们将收取您¥716.0支付给酒店。",
              "type": "2"
            },
            "instantConfirm": false,
            "available": "",
            "ratePrice": 335,
            "bedInfo": "1张大床"
          },
          {
            "invoiceType": 0,
            "wifi": "免费有线",
            "averagePrice": 362,
            "taxAndFeePrice": 0,
            "restNum": 0,
            "broadband": "免费有线",
            "mealInfo": "餐食: 每天2人早餐",
            "priceCalendar": [
              {
                "roomRate": "361.53",
                "taxAndFee": "0",
                "date": "2018-11-04",
                "prices": "361.53"
              },
              {
                "roomRate": "361.53",
                "taxAndFee": "0",
                "date": "2018-11-05",
                "prices": "361.53"
              }
            ],
            "roomType": {
              "code": "221806889",
              "name": ""
            },
            "bedType": "大床",
            "payType": "线上预付",
            "promotionRules": [],
            "name": "标准价",
            "maxOccupancy": 2,
            "networkInfo": "无线:不确定 免费有线",
            "bedTypeInfo": {
              "beds": [
                {
                  "size": "",
                  "count": 1,
                  "code": "QUEEN",
                  "seq": "1",
                  "desc": "大床"
                }
              ],
              "relation": ""
            },
            "id": "1_200_23690_1916676083",
            "breakfast": "双早",
            "cancel": {
              "name": "不可取消",
              "desc": "订单确认成功后，不可取消修改，如未入住或取消修改及提前离店，我们将收取您全额房费（含税费）",
              "type": "1"
            },
            "instantConfirm": true,
            "available": "立即确认",
            "ratePrice": 362,
            "bedInfo": "1张大床"
          },
          {
            "invoiceType": 0,
            "wifi": "免费",
            "averagePrice": 371,
            "taxAndFeePrice": 0,
            "restNum": 0,
            "broadband": "免费",
            "mealInfo": "餐食：房价不包含早餐",
            "priceCalendar": [
              {
                "roomRate": "370.80",
                "taxAndFee": "0",
                "date": "2018-11-04",
                "prices": "370.80"
              },
              {
                "roomRate": "370.80",
                "taxAndFee": "0",
                "date": "2018-11-05",
                "prices": "370.80"
              }
            ],
            "roomType": {
              "code": "221806889",
              "name": ""
            },
            "bedType": "大床",
            "payType": "线上预付",
            "promotionRules": [],
            "name": "标准价",
            "maxOccupancy": 2,
            "networkInfo": "免费无线 免费有线",
            "bedTypeInfo": {
              "beds": [
                {
                  "size": "",
                  "count": 1,
                  "code": "QUEEN",
                  "seq": "1",
                  "desc": "大床"
                }
              ],
              "relation": ""
            },
            "id": "1_200_23690_1932972226",
            "breakfast": "无早",
            "cancel": {
              "name": "不可取消",
              "desc": "订单确认成功后，不可取消修改，如未入住或取消修改及提前离店，我们将收取您全额房费（含税费）",
              "type": "1"
            },
            "instantConfirm": false,
            "available": "",
            "ratePrice": 371,
            "bedInfo": "1张大床"
          },
          {
            "invoiceType": 0,
            "wifi": "免费",
            "averagePrice": 391,
            "taxAndFeePrice": 0,
            "restNum": 0,
            "broadband": "免费",
            "mealInfo": "餐食: 每天1人早餐",
            "priceCalendar": [
              {
                "roomRate": "390.37",
                "taxAndFee": "0",
                "date": "2018-11-04",
                "prices": "390.37"
              },
              {
                "roomRate": "390.37",
                "taxAndFee": "0",
                "date": "2018-11-05",
                "prices": "390.37"
              }
            ],
            "roomType": {
              "code": "221806889",
              "name": ""
            },
            "bedType": "大床",
            "payType": "线上预付",
            "promotionRules": [],
            "name": "标准价",
            "maxOccupancy": 2,
            "networkInfo": "免费无线 免费有线",
            "bedTypeInfo": {
              "beds": [
                {
                  "size": "",
                  "count": 1,
                  "code": "QUEEN",
                  "seq": "1",
                  "desc": "大床"
                }
              ],
              "relation": ""
            },
            "id": "1_200_23690_1961221140",
            "breakfast": "单早",
            "cancel": {
              "name": "不可取消",
              "desc": "订单确认成功后，不可取消修改，如未入住或取消修改及提前离店，我们将收取您全额房费（含税费）",
              "type": "1"
            },
            "instantConfirm": false,
            "available": "",
            "ratePrice": 391,
            "bedInfo": "1张大床"
          },
          {
            "invoiceType": 0,
            "wifi": "免费",
            "averagePrice": 392,
            "taxAndFeePrice": 0,
            "restNum": 0,
            "broadband": "免费",
            "mealInfo": "餐食：房价不包含早餐",
            "priceCalendar": [
              {
                "roomRate": "391.40",
                "taxAndFee": "0",
                "date": "2018-11-04",
                "prices": "391.40"
              },
              {
                "roomRate": "391.40",
                "taxAndFee": "0",
                "date": "2018-11-05",
                "prices": "391.40"
              }
            ],
            "roomType": {
              "code": "221806889",
              "name": ""
            },
            "bedType": "大床",
            "payType": "线上预付",
            "promotionRules": [],
            "name": "标准价",
            "maxOccupancy": 2,
            "networkInfo": "免费无线 免费有线",
            "bedTypeInfo": {
              "beds": [
                {
                  "size": "",
                  "count": 1,
                  "code": "QUEEN",
                  "seq": "1",
                  "desc": "大床"
                }
              ],
              "relation": ""
            },
            "id": "1_200_23690_1953662295",
            "breakfast": "无早",
            "cancel": {
              "name": "不可取消",
              "desc": "订单确认成功后，不可取消修改，如未入住或取消修改及提前离店，我们将收取您全额房费（含税费）",
              "type": "1"
            },
            "instantConfirm": false,
            "available": "",
            "ratePrice": 392,
            "bedInfo": "1张大床"
          },
          {
            "invoiceType": 0,
            "wifi": "免费",
            "averagePrice": 392,
            "taxAndFeePrice": 0,
            "restNum": 0,
            "broadband": "免费",
            "mealInfo": "餐食：房价不包含早餐",
            "priceCalendar": [
              {
                "roomRate": "391.40",
                "taxAndFee": "0",
                "date": "2018-11-04",
                "prices": "391.40"
              },
              {
                "roomRate": "391.40",
                "taxAndFee": "0",
                "date": "2018-11-05",
                "prices": "391.40"
              }
            ],
            "roomType": {
              "code": "221806889",
              "name": ""
            },
            "bedType": "大床",
            "payType": "线上预付",
            "promotionRules": [],
            "name": "标准价",
            "maxOccupancy": 2,
            "networkInfo": "免费无线 免费有线",
            "bedTypeInfo": {
              "beds": [
                {
                  "size": "",
                  "count": 1,
                  "code": "QUEEN",
                  "seq": "1",
                  "desc": "大床"
                }
              ],
              "relation": ""
            },
            "id": "1_200_23690_1962276826",
            "breakfast": "无早",
            "cancel": {
              "name": "不可取消",
              "desc": "订单确认成功后，不可取消修改，如未入住或取消修改及提前离店，我们将收取您全额房费（含税费）",
              "type": "1"
            },
            "instantConfirm": false,
            "available": "",
            "ratePrice": 392,
            "bedInfo": "1张大床"
          },
          {
            "invoiceType": 0,
            "wifi": "免费有线",
            "averagePrice": 409,
            "taxAndFeePrice": 0,
            "restNum": 0,
            "broadband": "免费有线",
            "mealInfo": "餐食: 每天2人早餐",
            "priceCalendar": [
              {
                "roomRate": "408.91",
                "taxAndFee": "0",
                "date": "2018-11-04",
                "prices": "408.91"
              },
              {
                "roomRate": "408.91",
                "taxAndFee": "0",
                "date": "2018-11-05",
                "prices": "408.91"
              }
            ],
            "roomType": {
              "code": "221806889",
              "name": ""
            },
            "bedType": "大床",
            "payType": "线上预付",
            "promotionRules": [],
            "name": "标准价",
            "maxOccupancy": 2,
            "networkInfo": "无线:不确定 免费有线",
            "bedTypeInfo": {
              "beds": [
                {
                  "size": "",
                  "count": 1,
                  "code": "QUEEN",
                  "seq": "1",
                  "desc": "大床"
                }
              ],
              "relation": ""
            },
            "id": "1_200_23690_1886021493",
            "breakfast": "双早",
            "cancel": {
              "name": "不可取消",
              "desc": "订单确认成功后，不可取消修改，如未入住或取消修改及提前离店，我们将收取您全额房费（含税费）",
              "type": "1"
            },
            "instantConfirm": false,
            "available": "",
            "ratePrice": 409,
            "bedInfo": "1张大床"
          },
          {
            "invoiceType": 0,
            "wifi": "免费",
            "averagePrice": 434,
            "taxAndFeePrice": 0,
            "restNum": 0,
            "broadband": "免费",
            "mealInfo": "餐食: 每天2人早餐",
            "priceCalendar": [
              {
                "roomRate": "433.63",
                "taxAndFee": "0",
                "date": "2018-11-04",
                "prices": "433.63"
              },
              {
                "roomRate": "433.63",
                "taxAndFee": "0",
                "date": "2018-11-05",
                "prices": "433.63"
              }
            ],
            "roomType": {
              "code": "221806889",
              "name": ""
            },
            "bedType": "大床",
            "payType": "线上预付",
            "promotionRules": [],
            "name": "标准价",
            "maxOccupancy": 2,
            "networkInfo": "免费无线 免费有线",
            "bedTypeInfo": {
              "beds": [
                {
                  "size": "",
                  "count": 1,
                  "code": "QUEEN",
                  "seq": "1",
                  "desc": "大床"
                }
              ],
              "relation": ""
            },
            "id": "1_200_23690_1947734291",
            "breakfast": "双早",
            "cancel": {
              "name": "不可取消",
              "desc": "订单确认成功后，不可取消修改，如未入住或取消修改及提前离店，我们将收取您全额房费（含税费）",
              "type": "1"
            },
            "instantConfirm": false,
            "available": "",
            "ratePrice": 434,
            "bedInfo": "1张大床"
          },
          {
            "invoiceType": 0,
            "wifi": "免费",
            "averagePrice": 434,
            "taxAndFeePrice": 0,
            "restNum": 0,
            "broadband": "免费",
            "mealInfo": "餐食: 每天2人早餐",
            "priceCalendar": [
              {
                "roomRate": "433.63",
                "taxAndFee": "0",
                "date": "2018-11-04",
                "prices": "433.63"
              },
              {
                "roomRate": "433.63",
                "taxAndFee": "0",
                "date": "2018-11-05",
                "prices": "433.63"
              }
            ],
            "roomType": {
              "code": "221806889",
              "name": ""
            },
            "bedType": "大床",
            "payType": "线上预付",
            "promotionRules": [],
            "name": "标准价",
            "maxOccupancy": 2,
            "networkInfo": "免费无线 免费有线",
            "bedTypeInfo": {
              "beds": [
                {
                  "size": "",
                  "count": 1,
                  "code": "QUEEN",
                  "seq": "1",
                  "desc": "大床"
                }
              ],
              "relation": ""
            },
            "id": "1_200_23690_1953662293",
            "breakfast": "双早",
            "cancel": {
              "name": "不可取消",
              "desc": "订单确认成功后，不可取消修改，如未入住或取消修改及提前离店，我们将收取您全额房费（含税费）",
              "type": "1"
            },
            "instantConfirm": false,
            "available": "",
            "ratePrice": 434,
            "bedInfo": "1张大床"
          }
        ]
      },
      {
        "isExtraBed": "不可加床",
        "facilities": [
          {
            "tmpSubFacilities": [
              {
                "subName": "国内长途电话",
                "subType": 1,
                "subCode": 38
              },
              {
                "subName": "国际长途电话",
                "subType": 1,
                "subCode": 39
              },
              {
                "subName": "电话",
                "subType": 1,
                "subCode": 40
              },
              {
                "subName": "有线频道",
                "subType": 1,
                "subCode": 42
              },
              {
                "subName": "卫星频道",
                "subType": 1,
                "subCode": 43
              },
              {
                "subName": "液晶电视机",
                "subType": 1,
                "subCode": 44
              },
              {
                "subName": "电脑",
                "subType": 2,
                "subCode": 48
              }
            ],
            "name": "媒体/科技",
            "code": 2
          },
          {
            "tmpSubFacilities": [
              {
                "subName": "免费洗漱用品(6样以上)",
                "subType": 1,
                "subCode": 74
              },
              {
                "subName": "无免费洗漱用品",
                "subType": 1,
                "subCode": 76
              },
              {
                "subName": "24小时热水",
                "subType": 1,
                "subCode": 77
              },
              {
                "subName": "浴缸",
                "subType": 1,
                "subCode": 81
              },
              {
                "subName": "淋浴",
                "subType": 1,
                "subCode": 84
              },
              {
                "subName": "浴室",
                "subType": 1,
                "subCode": 85
              },
              {
                "subName": "独立淋浴间",
                "subType": 1,
                "subCode": 86
              },
              {
                "subName": "吹风机",
                "subType": 1,
                "subCode": 89
              },
              {
                "subName": "拖鞋",
                "subType": 1,
                "subCode": 91
              },
              {
                "subName": "浴衣",
                "subType": 1,
                "subCode": 92
              },
              {
                "subName": "浴室化妆放大镜",
                "subType": 1,
                "subCode": 93
              },
              {
                "subName": "洗浴间电话",
                "subType": 1,
                "subCode": 95
              }
            ],
            "name": "浴室",
            "code": 4
          },
          {
            "tmpSubFacilities": [
              {
                "subName": "唤醒服务",
                "subType": 1,
                "subCode": 109
              },
              {
                "subName": "欢迎礼品",
                "subType": 1,
                "subCode": 110
              },
              {
                "subName": "免费报纸",
                "subType": 1,
                "subCode": 112
              },
              {
                "subName": "空气检测器",
                "subType": 1,
                "subCode": 119
              }
            ],
            "name": "服务及其他",
            "code": 6
          },
          {
            "tmpSubFacilities": [
              {
                "subName": "多种规格电源插座",
                "subType": 1,
                "subCode": 1
              },
              {
                "subName": "220V电压插座",
                "subType": 1,
                "subCode": 3
              },
              {
                "subName": "遮光窗帘",
                "subType": 1,
                "subCode": 6
              },
              {
                "subName": "手动窗帘",
                "subType": 1,
                "subCode": 8
              },
              {
                "subName": "房内保险箱",
                "subType": 1,
                "subCode": 10
              },
              {
                "subName": "书桌",
                "subType": 1,
                "subCode": 11
              },
              {
                "subName": "沙发",
                "subType": 1,
                "subCode": 12
              },
              {
                "subName": "坐卧两用长沙发",
                "subType": 1,
                "subCode": 13
              },
              {
                "subName": "床具:鸭绒被",
                "subType": 1,
                "subCode": 16
              },
              {
                "subName": "床具:毯子或被子",
                "subType": 1,
                "subCode": 17
              },
              {
                "subName": "电子秤",
                "subType": 1,
                "subCode": 19
              },
              {
                "subName": "闹钟",
                "subType": 1,
                "subCode": 20
              },
              {
                "subName": "针线包",
                "subType": 1,
                "subCode": 21
              },
              {
                "subName": "衣柜/衣橱",
                "subType": 1,
                "subCode": 25
              },
              {
                "subName": "开夜床",
                "subType": 1,
                "subCode": 34
              },
              {
                "subName": "房间内高速上网",
                "subType": 1,
                "subCode": 35
              },
              {
                "subName": "客房WIFI覆盖免费",
                "subType": 1,
                "subCode": 37
              }
            ],
            "name": "便利设施",
            "code": 1
          },
          {
            "tmpSubFacilities": [
              {
                "subName": "电热水壶",
                "subType": 1,
                "subCode": 65
              },
              {
                "subName": "迷你吧",
                "subType": 1,
                "subCode": 67
              },
              {
                "subName": "小冰箱",
                "subType": 1,
                "subCode": 68
              }
            ],
            "name": "食品和饮品",
            "code": 3
          },
          {
            "tmpSubFacilities": [
              {
                "subName": "阳台",
                "subType": 1,
                "subCode": 106
              }
            ],
            "name": "室外/景观",
            "code": 5
          }
        ],
        "roomId": 221806892,
        "area": "28平方米",
        "floor": "3-5层",
        "roomLowestPrice": 317,
        "noSmoking": "可全部无烟处理",
        "pictures": {
          "pics": [
            {
              "firstPic": false,
              "picId": 14821622,
              "seqNum": 0,
              "status": 0,
              "picName": "客房",
              "path": "http://app1.showapi.com/images/hotel/b5720045-8b1c-4161-982e-7d9800770adc.jpg",
              "height": 0,
              "picSource": 6,
              "delFlag": 0,
              "picType": 3,
              "width": 0
            },
            {
              "firstPic": false,
              "picId": 17881249,
              "seqNum": 0,
              "status": 0,
              "picName": "客房",
              "path": "http://app1.showapi.com/images/hotel/6bfb324d-1713-47a3-af8b-83313d8c6286.jpg",
              "height": 0,
              "picSource": 6,
              "delFlag": 0,
              "picType": 3,
              "width": 0
            },
            {
              "firstPic": false,
              "picId": 17881250,
              "seqNum": 0,
              "status": 0,
              "picName": "客房",
              "path": "http://app1.showapi.com/images/hotel/32f71d87-9b15-4cc8-9f09-3317637e1953.jpg",
              "height": 0,
              "picSource": 6,
              "delFlag": 0,
              "picType": 3,
              "width": 0
            },
            {
              "firstPic": false,
              "picId": 17881251,
              "seqNum": 0,
              "status": 0,
              "picName": "客房",
              "path": "http://app1.showapi.com/images/hotel/0d4c027e-1b26-41a8-b7c8-35af2a67e47a.jpg",
              "height": 0,
              "picSource": 6,
              "delFlag": 0,
              "picType": 3,
              "width": 0
            },
            {
              "firstPic": false,
              "picId": 17881252,
              "seqNum": 0,
              "status": 0,
              "picName": "客房",
              "path": "http://app1.showapi.com/images/hotel/9b6afb8e-13af-4679-8a61-93d2f6df7dcc.jpg",
              "height": 0,
              "picSource": 6,
              "delFlag": 0,
              "picType": 3,
              "width": 0
            },
            {
              "firstPic": false,
              "picId": 17881253,
              "seqNum": 0,
              "status": 0,
              "picName": "客房",
              "path": "http://app1.showapi.com/images/hotel/437dd247-b182-4fc1-928c-0e1c398109f0.jpg",
              "height": 0,
              "picSource": 6,
              "delFlag": 0,
              "picType": 3,
              "width": 0
            },
            {
              "firstPic": false,
              "picId": 17881254,
              "seqNum": 0,
              "status": 0,
              "picName": "客房",
              "path": "http://app1.showapi.com/images/hotel/aa125f3c-710f-450c-907f-87d83dd76996.jpg",
              "height": 0,
              "picSource": 6,
              "delFlag": 0,
              "picType": 3,
              "width": 0
            },
            {
              "firstPic": false,
              "picId": 10022294,
              "seqNum": 1,
              "status": 0,
              "picName": "客房",
              "path": "http://app1.showapi.com/images/hotel/e73dbfaf-4ac9-48b8-9a71-383cb0ad55dd.jpg",
              "height": 0,
              "picSource": 6,
              "delFlag": 0,
              "picType": 3,
              "width": 0
            },
            {
              "firstPic": false,
              "picId": 10022295,
              "seqNum": 2,
              "status": 0,
              "picName": "客房",
              "path": "http://app1.showapi.com/images/hotel/5e349eec-7e5f-4712-a70c-59f855e85486.jpg",
              "height": 0,
              "picSource": 6,
              "delFlag": 0,
              "picType": 3,
              "width": 0
            }
          ],
          "picCount": 9
        },
        "source": 1,
        "bedDescription": "双床 1.2米",
        "isExtraBedNum": "2人",
        "roomNameCn": "精致双床房",
        "ratePlanInfo": [
          {
            "invoiceType": 0,
            "wifi": "免费有线",
            "averagePrice": 342,
            "taxAndFeePrice": 0,
            "restNum": 0,
            "broadband": "免费有线",
            "mealInfo": "餐食：房价不包含早餐",
            "priceCalendar": [
              {
                "roomRate": "296.64",
                "taxAndFee": "0",
                "date": "2018-11-04",
                "prices": "296.64"
              },
              {
                "roomRate": "387.28",
                "taxAndFee": "0",
                "date": "2018-11-05",
                "prices": "387.28"
              }
            ],
            "roomType": {
              "code": "221806892",
              "name": ""
            },
            "bedType": "双床",
            "payType": "线上预付",
            "promotionRules": [],
            "name": "标准价",
            "maxOccupancy": 2,
            "networkInfo": "无线:不确定 免费有线",
            "bedTypeInfo": {
              "beds": [
                {
                  "size": "",
                  "count": 2,
                  "code": "SINGLE",
                  "seq": "1",
                  "desc": "单人床"
                }
              ],
              "relation": ""
            },
            "id": "1_200_23690_1916676086",
            "breakfast": "无早",
            "cancel": {
              "name": "不可取消",
              "desc": "订单确认成功后，不可取消修改，如未入住或取消修改及提前离店，我们将收取您全额房费（含税费）",
              "type": "1"
            },
            "instantConfirm": true,
            "available": "立即确认",
            "ratePrice": 342,
            "bedInfo": "2张单人床"
          },
          {
            "invoiceType": 0,
            "id": "1_200_27478_1768960526",
            "averagePrice": 317,
            "taxAndFeePrice": 0,
            "restNum": 8,
            "broadband": "免费无线",
            "mealInfo": "餐食：房价不包含早餐",
            "priceCalendar": [
              {
                "roomRate": "262.65",
                "taxAndFee": "0",
                "date": "2018-11-04",
                "prices": "262.65"
              },
              {
                "roomRate": "370.80",
                "taxAndFee": "0",
                "date": "2018-11-05",
                "prices": "370.80"
              }
            ],
            "roomType": {
              "code": "221806892",
              "name": ""
            },
            "wifi": "免费无线",
            "promotionRules": [
              {
                "value": "0",
                "unit": "HOUR",
                "code": "ADVANCE"
              }
            ],
            "payType": "线上预付",
            "maxOccupancy": 2,
            "name": "精致双床房[无早](酒店直采)",
            "bedType": "双床",
            "networkInfo": "免费无线 有线:不确定",
            "bedTypeInfo": {
              "beds": [
                {
                  "size": "",
                  "count": 2,
                  "code": "SINGLE",
                  "seq": "1",
                  "desc": "单人床"
                }
              ],
              "relation": ""
            },
            "guestType": "1",
            "breakfast": "无早",
            "cancel": {
              "name": "限时取消",
              "desc": "2018-11-04 16:00:00前可免费取消修改；若未入住或过时取消修改及提前离店，我们将收取您¥677.0支付给酒店。",
              "type": "2"
            },
            "instantConfirm": true,
            "available": "立即确认",
            "ratePrice": 317,
            "bedInfo": "2张单人床"
          },
          {
            "invoiceType": 0,
            "wifi": "免费有线",
            "averagePrice": 366,
            "taxAndFeePrice": 0,
            "restNum": 0,
            "broadband": "免费有线",
            "mealInfo": "餐食: 每天1人早餐",
            "priceCalendar": [
              {
                "roomRate": "318.27",
                "taxAndFee": "0",
                "date": "2018-11-04",
                "prices": "318.27"
              },
              {
                "roomRate": "413.03",
                "taxAndFee": "0",
                "date": "2018-11-05",
                "prices": "413.03"
              }
            ],
            "roomType": {
              "code": "221806892",
              "name": ""
            },
            "bedType": "双床",
            "payType": "线上预付",
            "promotionRules": [],
            "name": "标准价",
            "maxOccupancy": 2,
            "networkInfo": "无线:不确定 免费有线",
            "bedTypeInfo": {
              "beds": [
                {
                  "size": "",
                  "count": 2,
                  "code": "SINGLE",
                  "seq": "1",
                  "desc": "单人床"
                }
              ],
              "relation": ""
            },
            "id": "1_200_23690_1916676089",
            "breakfast": "单早",
            "cancel": {
              "name": "不可取消",
              "desc": "订单确认成功后，不可取消修改，如未入住或取消修改及提前离店，我们将收取您全额房费（含税费）",
              "type": "1"
            },
            "instantConfirm": true,
            "available": "立即确认",
            "ratePrice": 366,
            "bedInfo": "2张单人床"
          },
          {
            "invoiceType": 0,
            "id": "1_200_27478_1875867584",
            "averagePrice": 356,
            "taxAndFeePrice": 0,
            "restNum": 8,
            "broadband": "免费",
            "mealInfo": "餐食: 每天2人早餐",
            "priceCalendar": [
              {
                "roomRate": "309.00",
                "taxAndFee": "0",
                "date": "2018-11-04",
                "prices": "309.00"
              },
              {
                "roomRate": "401.70",
                "taxAndFee": "0",
                "date": "2018-11-05",
                "prices": "401.70"
              }
            ],
            "roomType": {
              "code": "221806892",
              "name": ""
            },
            "wifi": "免费",
            "promotionRules": [
              {
                "value": "2",
                "unit": "HOUR",
                "code": "ADVANCE"
              }
            ],
            "payType": "线上预付",
            "maxOccupancy": 2,
            "name": "精致双床房[双早](含两份38元/份早餐)",
            "bedType": "双床",
            "networkInfo": "免费无线 免费有线",
            "bedTypeInfo": {
              "beds": [
                {
                  "size": "",
                  "count": 2,
                  "code": "SINGLE",
                  "seq": "1",
                  "desc": "单人床"
                }
              ],
              "relation": ""
            },
            "guestType": "1",
            "breakfast": "双早",
            "cancel": {
              "name": "限时取消",
              "desc": "2018-11-04 16:00:00前可免费取消修改；若未入住或过时取消修改及提前离店，我们将收取您¥759.0支付给酒店。",
              "type": "2"
            },
            "instantConfirm": true,
            "available": "立即确认",
            "ratePrice": 356,
            "bedInfo": "2张单人床"
          },
          {
            "invoiceType": 0,
            "wifi": "免费有线",
            "averagePrice": 380,
            "taxAndFeePrice": 0,
            "restNum": 0,
            "broadband": "免费有线",
            "mealInfo": "餐食: 每天2人早餐",
            "priceCalendar": [
              {
                "roomRate": "335.78",
                "taxAndFee": "0",
                "date": "2018-11-04",
                "prices": "335.78"
              },
              {
                "roomRate": "422.30",
                "taxAndFee": "0",
                "date": "2018-11-05",
                "prices": "422.30"
              }
            ],
            "roomType": {
              "code": "221806892",
              "name": ""
            },
            "bedType": "双床",
            "payType": "线上预付",
            "promotionRules": [],
            "name": "标准价",
            "maxOccupancy": 2,
            "networkInfo": "无线:不确定 免费有线",
            "bedTypeInfo": {
              "beds": [
                {
                  "size": "",
                  "count": 2,
                  "code": "SINGLE",
                  "seq": "1",
                  "desc": "单人床"
                }
              ],
              "relation": ""
            },
            "id": "1_200_23690_1916676084",
            "breakfast": "双早",
            "cancel": {
              "name": "不可取消",
              "desc": "订单确认成功后，不可取消修改，如未入住或取消修改及提前离店，我们将收取您全额房费（含税费）",
              "type": "1"
            },
            "instantConfirm": true,
            "available": "立即确认",
            "ratePrice": 380,
            "bedInfo": "2张单人床"
          }
        ]
      },
      {
        "isExtraBed": "不可加床",
        "facilities": [
          {
            "tmpSubFacilities": [
              {
                "subName": "国内长途电话",
                "subType": 1,
                "subCode": 38
              },
              {
                "subName": "国际长途电话",
                "subType": 1,
                "subCode": 39
              },
              {
                "subName": "电话",
                "subType": 1,
                "subCode": 40
              },
              {
                "subName": "有线频道",
                "subType": 1,
                "subCode": 42
              },
              {
                "subName": "卫星频道",
                "subType": 1,
                "subCode": 43
              },
              {
                "subName": "液晶电视机",
                "subType": 1,
                "subCode": 44
              },
              {
                "subName": "电脑",
                "subType": 2,
                "subCode": 48
              }
            ],
            "name": "媒体/科技",
            "code": 2
          },
          {
            "tmpSubFacilities": [
              {
                "subName": "免费洗漱用品(6样以上)",
                "subType": 1,
                "subCode": 74
              },
              {
                "subName": "无免费洗漱用品",
                "subType": 1,
                "subCode": 76
              },
              {
                "subName": "24小时热水",
                "subType": 1,
                "subCode": 77
              },
              {
                "subName": "浴缸",
                "subType": 1,
                "subCode": 81
              },
              {
                "subName": "淋浴",
                "subType": 1,
                "subCode": 84
              },
              {
                "subName": "浴室",
                "subType": 1,
                "subCode": 85
              },
              {
                "subName": "独立淋浴间",
                "subType": 1,
                "subCode": 86
              },
              {
                "subName": "吹风机",
                "subType": 1,
                "subCode": 89
              },
              {
                "subName": "拖鞋",
                "subType": 1,
                "subCode": 91
              },
              {
                "subName": "浴衣",
                "subType": 1,
                "subCode": 92
              },
              {
                "subName": "浴室化妆放大镜",
                "subType": 1,
                "subCode": 93
              },
              {
                "subName": "洗浴间电话",
                "subType": 1,
                "subCode": 95
              }
            ],
            "name": "浴室",
            "code": 4
          },
          {
            "tmpSubFacilities": [
              {
                "subName": "唤醒服务",
                "subType": 1,
                "subCode": 109
              },
              {
                "subName": "欢迎礼品",
                "subType": 1,
                "subCode": 110
              },
              {
                "subName": "免费报纸",
                "subType": 1,
                "subCode": 112
              },
              {
                "subName": "空气检测器",
                "subType": 1,
                "subCode": 119
              }
            ],
            "name": "服务及其他",
            "code": 6
          },
          {
            "tmpSubFacilities": [
              {
                "subName": "多种规格电源插座",
                "subType": 1,
                "subCode": 1
              },
              {
                "subName": "220V电压插座",
                "subType": 1,
                "subCode": 3
              },
              {
                "subName": "遮光窗帘",
                "subType": 1,
                "subCode": 6
              },
              {
                "subName": "手动窗帘",
                "subType": 1,
                "subCode": 8
              },
              {
                "subName": "房内保险箱",
                "subType": 1,
                "subCode": 10
              },
              {
                "subName": "书桌",
                "subType": 1,
                "subCode": 11
              },
              {
                "subName": "沙发",
                "subType": 1,
                "subCode": 12
              },
              {
                "subName": "坐卧两用长沙发",
                "subType": 1,
                "subCode": 13
              },
              {
                "subName": "床具:鸭绒被",
                "subType": 1,
                "subCode": 16
              },
              {
                "subName": "床具:毯子或被子",
                "subType": 1,
                "subCode": 17
              },
              {
                "subName": "电子秤",
                "subType": 1,
                "subCode": 19
              },
              {
                "subName": "闹钟",
                "subType": 1,
                "subCode": 20
              },
              {
                "subName": "针线包",
                "subType": 1,
                "subCode": 21
              },
              {
                "subName": "衣柜/衣橱",
                "subType": 1,
                "subCode": 25
              },
              {
                "subName": "中央空调",
                "subType": 1,
                "subCode": 28
              },
              {
                "subName": "开夜床",
                "subType": 1,
                "subCode": 34
              },
              {
                "subName": "房间内高速上网",
                "subType": 1,
                "subCode": 35
              },
              {
                "subName": "客房WIFI覆盖免费",
                "subType": 1,
                "subCode": 37
              }
            ],
            "name": "便利设施",
            "code": 1
          },
          {
            "tmpSubFacilities": [
              {
                "subName": "电热水壶",
                "subType": 1,
                "subCode": 65
              },
              {
                "subName": "迷你吧",
                "subType": 1,
                "subCode": 67
              },
              {
                "subName": "小冰箱",
                "subType": 1,
                "subCode": 68
              }
            ],
            "name": "食品和饮品",
            "code": 3
          },
          {
            "tmpSubFacilities": [
              {
                "subName": "阳台",
                "subType": 1,
                "subCode": 106
              }
            ],
            "name": "室外/景观",
            "code": 5
          }
        ],
        "roomId": 221806890,
        "area": "76平方米",
        "floor": "4-6层",
        "roomLowestPrice": 505,
        "noSmoking": "可全部无烟处理",
        "pictures": {
          "pics": [
            {
              "firstPic": false,
              "picId": 14821609,
              "seqNum": 0,
              "status": 0,
              "picName": "客房",
              "path": "http://app1.showapi.com/images/hotel/ff508b56-7b10-44b1-8b6d-b27f4b6ae758.jpg",
              "height": 0,
              "picSource": 6,
              "delFlag": 0,
              "picType": 3,
              "width": 0
            },
            {
              "firstPic": false,
              "picId": 14821610,
              "seqNum": 0,
              "status": 0,
              "picName": "客房",
              "path": "http://app1.showapi.com/images/hotel/04e411f1-575b-46ab-9d9b-84d9c34cc30e.jpg",
              "height": 0,
              "picSource": 6,
              "delFlag": 0,
              "picType": 3,
              "width": 0
            },
            {
              "firstPic": false,
              "picId": 14821611,
              "seqNum": 0,
              "status": 0,
              "picName": "客房",
              "path": "http://app1.showapi.com/images/hotel/e7a59cc8-96a4-4558-a25a-11253bf6ea49.jpg",
              "height": 0,
              "picSource": 6,
              "delFlag": 0,
              "picType": 3,
              "width": 0
            },
            {
              "firstPic": false,
              "picId": 14821612,
              "seqNum": 0,
              "status": 0,
              "picName": "客房",
              "path": "http://app1.showapi.com/images/hotel/e996ed93-da8b-4161-8020-1b911a6db949.jpg",
              "height": 0,
              "picSource": 6,
              "delFlag": 0,
              "picType": 3,
              "width": 0
            },
            {
              "firstPic": false,
              "picId": 14821613,
              "seqNum": 0,
              "status": 0,
              "picName": "客房",
              "path": "http://app1.showapi.com/images/hotel/106aaa27-389f-4e0a-a750-b278f568f373.jpg",
              "height": 0,
              "picSource": 6,
              "delFlag": 0,
              "picType": 3,
              "width": 0
            },
            {
              "firstPic": false,
              "picId": 17881246,
              "seqNum": 0,
              "status": 0,
              "picName": "客房",
              "path": "http://app1.showapi.com/images/hotel/d25c6ab5-7cdf-4410-bf59-354cfd9301d1.jpg",
              "height": 0,
              "picSource": 6,
              "delFlag": 0,
              "picType": 3,
              "width": 0
            },
            {
              "firstPic": false,
              "picId": 17881247,
              "seqNum": 0,
              "status": 0,
              "picName": "客房",
              "path": "http://app1.showapi.com/images/hotel/21e3ccda-8fe4-47fa-813d-ad1b8b257beb.jpg",
              "height": 0,
              "picSource": 6,
              "delFlag": 0,
              "picType": 3,
              "width": 0
            },
            {
              "firstPic": false,
              "picId": 17881248,
              "seqNum": 0,
              "status": 0,
              "picName": "客房",
              "path": "http://app1.showapi.com/images/hotel/ae43f967-52f5-4a70-ab41-878425b4c337.jpg",
              "height": 0,
              "picSource": 6,
              "delFlag": 0,
              "picType": 3,
              "width": 0
            },
            {
              "firstPic": false,
              "picId": 10022285,
              "seqNum": 1,
              "status": 0,
              "picName": "客房",
              "path": "http://app1.showapi.com/images/hotel/fee35b36-0d0e-4298-9ee9-8aa194e39ca1.jpg",
              "height": 0,
              "picSource": 6,
              "delFlag": 0,
              "picType": 3,
              "width": 0
            },
            {
              "firstPic": false,
              "picId": 10022286,
              "seqNum": 2,
              "status": 0,
              "picName": "客房",
              "path": "http://app1.showapi.com/images/hotel/beb08f26-5c5a-4ecb-930a-e55538df844f.jpg",
              "height": 0,
              "picSource": 6,
              "delFlag": 0,
              "picType": 3,
              "width": 0
            },
            {
              "firstPic": false,
              "picId": 10022287,
              "seqNum": 3,
              "status": 0,
              "picName": "客房",
              "path": "http://app1.showapi.com/images/hotel/bfbc2722-7ff7-4f25-a082-816d439bbfb0.jpg",
              "height": 0,
              "picSource": 6,
              "delFlag": 0,
              "picType": 3,
              "width": 0
            },
            {
              "firstPic": false,
              "picId": 10022288,
              "seqNum": 4,
              "status": 0,
              "picName": "客房",
              "path": "http://app1.showapi.com/images/hotel/a382d9eb-0d72-48e3-8d7c-74d6c94eac4f.jpg",
              "height": 0,
              "picSource": 6,
              "delFlag": 0,
              "picType": 3,
              "width": 0
            },
            {
              "firstPic": false,
              "picId": 10022289,
              "seqNum": 5,
              "status": 0,
              "picName": "客房",
              "path": "http://app1.showapi.com/images/hotel/228cd597-3c6c-4583-a8b6-371aa2b3c997.jpg",
              "height": 0,
              "picSource": 6,
              "delFlag": 0,
              "picType": 3,
              "width": 0
            },
            {
              "firstPic": false,
              "picId": 10022290,
              "seqNum": 6,
              "status": 0,
              "picName": "客房",
              "path": "http://app1.showapi.com/images/hotel/51b2d01d-94a8-402f-9a15-af785ec7b2fb.jpg",
              "height": 0,
              "picSource": 6,
              "delFlag": 0,
              "picType": 3,
              "width": 0
            },
            {
              "firstPic": false,
              "picId": 10022291,
              "seqNum": 7,
              "status": 0,
              "picName": "客房",
              "path": "http://app1.showapi.com/images/hotel/da59c873-7e41-490a-9679-0cdd3315f314.jpg",
              "height": 0,
              "picSource": 6,
              "delFlag": 0,
              "picType": 3,
              "width": 0
            },
            {
              "firstPic": false,
              "picId": 10022292,
              "seqNum": 8,
              "status": 0,
              "picName": "客房",
              "path": "http://app1.showapi.com/images/hotel/074d4cf1-ae07-45da-97e3-04c689a2603f.jpg",
              "height": 0,
              "picSource": 6,
              "delFlag": 0,
              "picType": 3,
              "width": 0
            },
            {
              "firstPic": false,
              "picId": 10022293,
              "seqNum": 9,
              "status": 0,
              "picName": "客房",
              "path": "http://app1.showapi.com/images/hotel/2921246c-f0ed-4283-9be1-9fb0b84d22f6.jpg",
              "height": 0,
              "picSource": 6,
              "delFlag": 0,
              "picType": 3,
              "width": 0
            }
          ],
          "picCount": 17
        },
        "source": 1,
        "bedDescription": "大床 1.8米",
        "isExtraBedNum": "2人",
        "roomNameCn": "美致豪华套房",
        "ratePlanInfo": [
          {
            "invoiceType": 0,
            "wifi": "免费",
            "averagePrice": 748,
            "taxAndFeePrice": 0,
            "restNum": 0,
            "broadband": "免费",
            "mealInfo": "餐食：房价不包含早餐",
            "priceCalendar": [
              {
                "roomRate": "747.78",
                "taxAndFee": "0",
                "date": "2018-11-04",
                "prices": "747.78"
              },
              {
                "roomRate": "747.78",
                "taxAndFee": "0",
                "date": "2018-11-05",
                "prices": "747.78"
              }
            ],
            "roomType": {
              "code": "221806890",
              "name": ""
            },
            "bedType": "大床",
            "payType": "线上预付",
            "promotionRules": [],
            "name": "标准价",
            "maxOccupancy": 2,
            "networkInfo": "免费无线 免费有线",
            "bedTypeInfo": {
              "beds": [
                {
                  "size": "",
                  "count": 1,
                  "code": "QUEEN",
                  "seq": "1",
                  "desc": "大床"
                }
              ],
              "relation": ""
            },
            "id": "1_200_23690_1961221139",
            "breakfast": "无早",
            "cancel": {
              "name": "不可取消",
              "desc": "订单确认成功后，不可取消修改，如未入住或取消修改及提前离店，我们将收取您全额房费（含税费）",
              "type": "1"
            },
            "instantConfirm": false,
            "available": "",
            "ratePrice": 748,
            "bedInfo": "1张大床"
          },
          {
            "invoiceType": 0,
            "id": "1_200_27478_1768960327",
            "averagePrice": 505,
            "taxAndFeePrice": 0,
            "restNum": 8,
            "broadband": "免费无线",
            "mealInfo": "餐食：房价不包含早餐",
            "priceCalendar": [
              {
                "roomRate": "504.70",
                "taxAndFee": "0",
                "date": "2018-11-04",
                "prices": "504.70"
              },
              {
                "roomRate": "504.70",
                "taxAndFee": "0",
                "date": "2018-11-05",
                "prices": "504.70"
              }
            ],
            "roomType": {
              "code": "221806890",
              "name": ""
            },
            "wifi": "免费无线",
            "promotionRules": [
              {
                "value": "0",
                "unit": "HOUR",
                "code": "ADVANCE"
              }
            ],
            "payType": "线上预付",
            "maxOccupancy": 2,
            "name": "美致豪华套房[无早](酒店直采)",
            "bedType": "大床",
            "networkInfo": "免费无线 有线:不确定",
            "bedTypeInfo": {
              "beds": [
                {
                  "size": "",
                  "count": 1,
                  "code": "QUEEN",
                  "seq": "1",
                  "desc": "大床"
                }
              ],
              "relation": ""
            },
            "guestType": "1",
            "breakfast": "无早",
            "cancel": {
              "name": "限时取消",
              "desc": "2018-11-04 16:00:00前可免费取消修改；若未入住或过时取消修改及提前离店，我们将收取您¥1078.0支付给酒店。",
              "type": "2"
            },
            "instantConfirm": false,
            "available": "",
            "ratePrice": 505,
            "bedInfo": "1张大床"
          },
          {
            "invoiceType": 0,
            "wifi": "免费有线",
            "averagePrice": 604,
            "taxAndFeePrice": 0,
            "restNum": 0,
            "broadband": "免费有线",
            "mealInfo": "餐食: 每天2人早餐",
            "priceCalendar": [
              {
                "roomRate": "603.58",
                "taxAndFee": "0",
                "date": "2018-11-04",
                "prices": "603.58"
              },
              {
                "roomRate": "603.58",
                "taxAndFee": "0",
                "date": "2018-11-05",
                "prices": "603.58"
              }
            ],
            "roomType": {
              "code": "221806890",
              "name": ""
            },
            "bedType": "大床",
            "payType": "线上预付",
            "promotionRules": [],
            "name": "标准价",
            "maxOccupancy": 2,
            "networkInfo": "无线:不确定 免费有线",
            "bedTypeInfo": {
              "beds": [
                {
                  "size": "",
                  "count": 1,
                  "code": "QUEEN",
                  "seq": "1",
                  "desc": "大床"
                }
              ],
              "relation": ""
            },
            "id": "1_200_23690_1916676082",
            "breakfast": "双早",
            "cancel": {
              "name": "不可取消",
              "desc": "订单确认成功后，不可取消修改，如未入住或取消修改及提前离店，我们将收取您全额房费（含税费）",
              "type": "1"
            },
            "instantConfirm": true,
            "available": "立即确认",
            "ratePrice": 604,
            "bedInfo": "1张大床"
          },
          {
            "invoiceType": 0,
            "wifi": "免费有线",
            "averagePrice": 677,
            "taxAndFeePrice": 0,
            "restNum": 0,
            "broadband": "免费有线",
            "mealInfo": "餐食: 每天2人早餐",
            "priceCalendar": [
              {
                "roomRate": "676.71",
                "taxAndFee": "0",
                "date": "2018-11-04",
                "prices": "676.71"
              },
              {
                "roomRate": "676.71",
                "taxAndFee": "0",
                "date": "2018-11-05",
                "prices": "676.71"
              }
            ],
            "roomType": {
              "code": "221806890",
              "name": ""
            },
            "bedType": "大床",
            "payType": "线上预付",
            "promotionRules": [],
            "name": "标准价",
            "maxOccupancy": 2,
            "networkInfo": "无线:不确定 免费有线",
            "bedTypeInfo": {
              "beds": [
                {
                  "size": "",
                  "count": 1,
                  "code": "QUEEN",
                  "seq": "1",
                  "desc": "大床"
                }
              ],
              "relation": ""
            },
            "id": "1_200_23690_1886021492",
            "breakfast": "双早",
            "cancel": {
              "name": "不可取消",
              "desc": "订单确认成功后，不可取消修改，如未入住或取消修改及提前离店，我们将收取您全额房费（含税费）",
              "type": "1"
            },
            "instantConfirm": false,
            "available": "",
            "ratePrice": 677,
            "bedInfo": "1张大床"
          }
        ]
      }
    ]
  }

  render() {
    const detail = this.state.detail
    const rooms = this.state.rooms
    return (
      <div className="hotel-detail">
        <div className="first-img" 
          style={{backgroundImage: 
            `linear-gradient(transparent 50%,rgba(0,0,0,.5)),
            url(${detail.pictures.picInfos[0].path})`}}>

          <Link to="/hotels">
            <div className="back">
              <Icon type="left" />
            </div>
          </Link>
          <div className="name-card">
            <p className="name">{detail.hotelName}</p>
            <span className="des">{detail.decorateDate.match(/\d+(?=-)/)}年装修</span>
            <span className="des">{detail.hotelStarName}</span>
            {/* <span className="des">电话: {detail.hotelTel}</span> */}
          </div>
          <div className="pic-num">{detail.pictures.picCount} 张</div>
        </div>

        <div className="address-wrapper">
          <p className="address">{detail.address}</p>
          <i className="iconfont icon-icon_dingwei-mian-copy"></i>
        </div>
        
        <RoomAccordion rooms={rooms} />
      </div>
    )
  }
}
export default HotelDetail