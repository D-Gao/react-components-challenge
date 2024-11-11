/* eslint-disable no-useless-escape */
export const categories = {
  "1001": { categoryId: "1001", name: "Electronics" },
  /* "1002": { categoryId: "1002", name: "Home & Kitchen" }, */
  /* "1003": { categoryId: "1003", name: "Fitness & Outdoors" },
  "1004": { categoryId: "1004", name: "Fashion & Accessories" },
  "1005": { categoryId: "1005", name: "Office Supplies" }, */
};
export enum Status {
  ACTIVE = "active",
  INACTIVE = "inactive",
}

export type Product = {
  id: string;
  ref: string;
  name: string;
  categoryId: string;
  status?: Status;
  description: string;
  imageUrlPath: string;
};

export const totalProducts: Product[] = [
  {
    id: "1",
    ref: "100",
    name: "Electronic Device 1",
    status: Status.INACTIVE,
    categoryId: "1001",
    description: "Description for electronic device 1 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-1.jpg",
  },
  {
    id: "2",
    ref: "101",
    name: "Electronic Device 2",
    categoryId: "1001",
    description: "Description for electronic device 2 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-2.jpg",
  },
  {
    id: "3",
    ref: "102",
    name: "Electronic Device 3",
    categoryId: "1001",
    description: "Description for electronic device 3 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-3.jpg",
  },
  {
    id: "4",
    ref: "103",
    name: "Electronic Device 4",
    categoryId: "1001",
    description: "Description for electronic device 4 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-4.jpg",
  },
  {
    id: "5",
    ref: "104",
    name: "Electronic Device 5",
    categoryId: "1001",
    description: "Description for electronic device 5 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-5.jpg",
  },
  {
    id: "6",
    ref: "105",
    name: "Electronic Device 6",
    categoryId: "1001",
    description: "Description for electronic device 6 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-6.jpg",
  },
  {
    id: "7",
    ref: "106",
    name: "Electronic Device 7",
    categoryId: "1001",
    description: "Description for electronic device 7 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-7.jpg",
  },
  {
    id: "8",
    ref: "107",
    name: "Electronic Device 8",
    categoryId: "1001",
    description: "Description for electronic device 8 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-8.jpg",
  },
  {
    id: "9",
    ref: "108",
    name: "Electronic Device 9",
    categoryId: "1001",
    description: "Description for electronic device 9 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-9.jpg",
  },
  {
    id: "10",
    ref: "109",
    name: "Electronic Device 10",
    categoryId: "1001",
    description: "Description for electronic device 10 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-10.jpg",
  },
  {
    id: "11",
    ref: "110",
    name: "Electronic Device 11",
    categoryId: "1001",
    description: "Description for electronic device 11 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-11.jpg",
  },
  {
    id: "12",
    ref: "111",
    name: "Electronic Device 12",
    categoryId: "1001",
    description: "Description for electronic device 12 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-12.jpg",
  },
  {
    id: "13",
    ref: "112",
    name: "Electronic Device 13",
    categoryId: "1001",
    description: "Description for electronic device 13 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-13.jpg",
  },
  {
    id: "14",
    ref: "113",
    name: "Electronic Device 14",
    categoryId: "1001",
    description: "Description for electronic device 14 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-14.jpg",
  },
  {
    id: "15",
    ref: "114",
    name: "Electronic Device 15",
    categoryId: "1001",
    description: "Description for electronic device 15 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-15.jpg",
  },
  {
    id: "16",
    ref: "115",
    name: "Electronic Device 16",
    categoryId: "1001",
    description: "Description for electronic device 16 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-16.jpg",
  },
  {
    id: "17",
    ref: "116",
    name: "Electronic Device 17",
    categoryId: "1001",
    description: "Description for electronic device 17 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-17.jpg",
  },
  {
    id: "18",
    ref: "117",
    name: "Electronic Device 18",
    categoryId: "1001",
    description: "Description for electronic device 18 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-18.jpg",
  },
  {
    id: "19",
    ref: "118",
    name: "Electronic Device 19",
    categoryId: "1001",
    description: "Description for electronic device 19 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-19.jpg",
  },
  {
    id: "20",
    ref: "119",
    name: "Electronic Device 20",
    categoryId: "1001",
    description: "Description for electronic device 20 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-20.jpg",
  },
  {
    id: "21",
    ref: "120",
    name: "Electronic Device 21",
    categoryId: "1001",
    description: "Description for electronic device 21 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-21.jpg",
  },
  {
    id: "22",
    ref: "121",
    name: "Electronic Device 22",
    categoryId: "1001",
    description: "Description for electronic device 22 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-22.jpg",
  },
  {
    id: "23",
    ref: "122",
    name: "Electronic Device 23",
    categoryId: "1001",
    description: "Description for electronic device 23 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-23.jpg",
  },
  {
    id: "24",
    ref: "123",
    name: "Electronic Device 24",
    categoryId: "1001",
    description: "Description for electronic device 24 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-24.jpg",
  },
  {
    id: "25",
    ref: "124",
    name: "Electronic Device 25",
    categoryId: "1001",
    description: "Description for electronic device 25 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-25.jpg",
  },
  {
    id: "26",
    ref: "125",
    name: "Electronic Device 26",
    categoryId: "1001",
    description: "Description for electronic device 26 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-26.jpg",
  },
  {
    id: "27",
    ref: "126",
    name: "Electronic Device 27",
    categoryId: "1001",
    description: "Description for electronic device 27 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-27.jpg",
  },
  {
    id: "28",
    ref: "127",
    name: "Electronic Device 28",
    categoryId: "1001",
    description: "Description for electronic device 28 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-28.jpg",
  },
  {
    id: "29",
    ref: "128",
    name: "Electronic Device 29",
    categoryId: "1001",
    description: "Description for electronic device 29 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-29.jpg",
  },
  {
    id: "30",
    ref: "129",
    name: "Electronic Device 30",
    categoryId: "1001",
    description: "Description for electronic device 30 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-30.jpg",
  },
  {
    id: "31",
    ref: "130",
    name: "Electronic Device 31",
    categoryId: "1001",
    description: "Description for electronic device 31 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-31.jpg",
  },
  {
    id: "32",
    ref: "131",
    name: "Electronic Device 32",
    categoryId: "1001",
    description: "Description for electronic device 32 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-32.jpg",
  },
  {
    id: "33",
    ref: "132",
    name: "Electronic Device 33",
    categoryId: "1001",
    description: "Description for electronic device 33 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-33.jpg",
  },
  {
    id: "34",
    ref: "133",
    name: "Electronic Device 34",
    categoryId: "1001",
    description: "Description for electronic device 34 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-34.jpg",
  },
  {
    id: "35",
    ref: "134",
    name: "Electronic Device 35",
    categoryId: "1001",
    description: "Description for electronic device 35 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-35.jpg",
  },
  {
    id: "36",
    ref: "135",
    name: "Electronic Device 36",
    categoryId: "1001",
    description: "Description for electronic device 36 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-36.jpg",
  },
  {
    id: "37",
    ref: "136",
    name: "Electronic Device 37",
    categoryId: "1001",
    description: "Description for electronic device 37 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-37.jpg",
  },
  {
    id: "38",
    ref: "137",
    name: "Electronic Device 38",
    categoryId: "1001",
    description: "Description for electronic device 38 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-38.jpg",
  },
  {
    id: "39",
    ref: "138",
    name: "Electronic Device 39",
    categoryId: "1001",
    description: "Description for electronic device 39 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-39.jpg",
  },
  {
    id: "40",
    ref: "139",
    name: "Electronic Device 40",
    categoryId: "1001",
    description: "Description for electronic device 40 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-40.jpg",
  },
  {
    id: "41",
    ref: "140",
    name: "Electronic Device 41",
    categoryId: "1001",
    description: "Description for electronic device 41 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-41.jpg",
  },
  {
    id: "42",
    ref: "141",
    name: "Electronic Device 42",
    categoryId: "1001",
    description: "Description for electronic device 42 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-42.jpg",
  },
  {
    id: "43",
    ref: "142",
    name: "Electronic Device 43",
    categoryId: "1001",
    description: "Description for electronic device 43 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-43.jpg",
  },
  {
    id: "44",
    ref: "143",
    name: "Electronic Device 44",
    categoryId: "1001",
    description: "Description for electronic device 44 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-44.jpg",
  },
  {
    id: "45",
    ref: "144",
    name: "Electronic Device 45",
    categoryId: "1001",
    description: "Description for electronic device 45 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-45.jpg",
  },
  {
    id: "46",
    ref: "145",
    name: "Electronic Device 46",
    categoryId: "1001",
    description: "Description for electronic device 46 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-46.jpg",
  },
  {
    id: "47",
    ref: "146",
    name: "Electronic Device 47",
    categoryId: "1001",
    description: "Description for electronic device 47 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-47.jpg",
  },
  {
    id: "48",
    ref: "147",
    name: "Electronic Device 48",
    categoryId: "1001",
    description: "Description for electronic device 48 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-48.jpg",
  },
  {
    id: "49",
    ref: "148",
    name: "Electronic Device 49",
    categoryId: "1001",
    description: "Description for electronic device 49 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-49.jpg",
  },
  {
    id: "50",
    ref: "149",
    name: "Electronic Device 50",
    categoryId: "1001",
    description: "Description for electronic device 50 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-50.jpg",
  },
  {
    id: "51",
    ref: "150",
    name: "Electronic Device 51",
    categoryId: "1001",
    description: "Description for electronic device 51 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-51.jpg",
  },
  {
    id: "52",
    ref: "151",
    name: "Electronic Device 52",
    categoryId: "1001",
    description: "Description for electronic device 52 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-52.jpg",
  },
  {
    id: "53",
    ref: "152",
    name: "Electronic Device 53",
    categoryId: "1001",
    description: "Description for electronic device 53 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-53.jpg",
  },
  {
    id: "54",
    ref: "153",
    name: "Electronic Device 54",
    categoryId: "1001",
    description: "Description for electronic device 54 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-54.jpg",
  },
  {
    id: "55",
    ref: "154",
    name: "Electronic Device 55",
    categoryId: "1001",
    description: "Description for electronic device 55 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-55.jpg",
  },
  {
    id: "56",
    ref: "155",
    name: "Electronic Device 56",
    categoryId: "1001",
    description: "Description for electronic device 56 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-56.jpg",
  },
  {
    id: "57",
    ref: "156",
    name: "Electronic Device 57",
    categoryId: "1001",
    description: "Description for electronic device 57 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-57.jpg",
  },
  {
    id: "58",
    ref: "157",
    name: "Electronic Device 58",
    categoryId: "1001",
    description: "Description for electronic device 58 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-58.jpg",
  },
  {
    id: "59",
    ref: "158",
    name: "Electronic Device 59",
    categoryId: "1001",
    description: "Description for electronic device 59 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-59.jpg",
  },
  {
    id: "60",
    ref: "159",
    name: "Electronic Device 60",
    categoryId: "1001",
    description: "Description for electronic device 60 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-60.jpg",
  },
  {
    id: "61",
    ref: "160",
    name: "Electronic Device 61",
    categoryId: "1001",
    description: "Description for electronic device 61 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-61.jpg",
  },
  {
    id: "62",
    ref: "161",
    name: "Electronic Device 62",
    categoryId: "1001",
    description: "Description for electronic device 62 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-62.jpg",
  },
  {
    id: "63",
    ref: "162",
    name: "Electronic Device 63",
    categoryId: "1001",
    description: "Description for electronic device 63 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-63.jpg",
  },
  {
    id: "64",
    ref: "163",
    name: "Electronic Device 64",
    categoryId: "1001",
    description: "Description for electronic device 64 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-64.jpg",
  },
  {
    id: "65",
    ref: "164",
    name: "Electronic Device 65",
    categoryId: "1001",
    description: "Description for electronic device 65 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-65.jpg",
  },
  {
    id: "66",
    ref: "165",
    name: "Electronic Device 66",
    categoryId: "1001",
    description: "Description for electronic device 66 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-66.jpg",
  },
  {
    id: "67",
    ref: "166",
    name: "Electronic Device 67",
    categoryId: "1001",
    description: "Description for electronic device 67 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-67.jpg",
  },
  {
    id: "68",
    ref: "167",
    name: "Electronic Device 68",
    categoryId: "1001",
    description: "Description for electronic device 68 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-68.jpg",
  },
  {
    id: "69",
    ref: "168",
    name: "Electronic Device 69",
    categoryId: "1001",
    description: "Description for electronic device 69 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-69.jpg",
  },
  {
    id: "70",
    ref: "169",
    name: "Electronic Device 70",
    categoryId: "1001",
    description: "Description for electronic device 70 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-70.jpg",
  },
  {
    id: "71",
    ref: "170",
    name: "Electronic Device 71",
    categoryId: "1001",
    description: "Description for electronic device 71 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-71.jpg",
  },
  {
    id: "72",
    ref: "171",
    name: "Electronic Device 72",
    categoryId: "1001",
    description: "Description for electronic device 72 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-72.jpg",
  },
  {
    id: "73",
    ref: "172",
    name: "Electronic Device 73",
    categoryId: "1001",
    description: "Description for electronic device 73 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-73.jpg",
  },
  {
    id: "74",
    ref: "173",
    name: "Electronic Device 74",
    categoryId: "1001",
    description: "Description for electronic device 74 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-74.jpg",
  },
  {
    id: "75",
    ref: "174",
    name: "Electronic Device 75",
    categoryId: "1001",
    description: "Description for electronic device 75 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-75.jpg",
  },
  {
    id: "76",
    ref: "175",
    name: "Electronic Device 76",
    categoryId: "1001",
    description: "Description for electronic device 76 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-76.jpg",
  },
  {
    id: "77",
    ref: "176",
    name: "Electronic Device 77",
    categoryId: "1001",
    description: "Description for electronic device 77 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-77.jpg",
  },
  {
    id: "78",
    ref: "177",
    name: "Electronic Device 78",
    categoryId: "1001",
    description: "Description for electronic device 78 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-78.jpg",
  },
  {
    id: "79",
    ref: "178",
    name: "Electronic Device 79",
    categoryId: "1001",
    description: "Description for electronic device 79 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-79.jpg",
  },
  {
    id: "80",
    ref: "179",
    name: "Electronic Device 80",
    categoryId: "1001",
    description: "Description for electronic device 80 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-80.jpg",
  },
  {
    id: "81",
    ref: "180",
    name: "Electronic Device 81",
    categoryId: "1001",
    description: "Description for electronic device 81 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-81.jpg",
  },
  {
    id: "82",
    ref: "181",
    name: "Electronic Device 82",
    categoryId: "1001",
    description: "Description for electronic device 82 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-82.jpg",
  },
  {
    id: "83",
    ref: "182",
    name: "Electronic Device 83",
    categoryId: "1001",
    description: "Description for electronic device 83 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-83.jpg",
  },
  {
    id: "84",
    ref: "183",
    name: "Electronic Device 84",
    categoryId: "1001",
    description: "Description for electronic device 84 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-84.jpg",
  },
  {
    id: "85",
    ref: "184",
    name: "Electronic Device 85",
    categoryId: "1001",
    description: "Description for electronic device 85 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-85.jpg",
  },
  {
    id: "86",
    ref: "185",
    name: "Electronic Device 86",
    categoryId: "1001",
    description: "Description for electronic device 86 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-86.jpg",
  },
  {
    id: "87",
    ref: "186",
    name: "Electronic Device 87",
    categoryId: "1001",
    description: "Description for electronic device 87 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-87.jpg",
  },
  {
    id: "88",
    ref: "187",
    name: "Electronic Device 88",
    categoryId: "1001",
    description: "Description for electronic device 88 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-88.jpg",
  },
  {
    id: "89",
    ref: "188",
    name: "Electronic Device 89",
    categoryId: "1001",
    description: "Description for electronic device 89 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-89.jpg",
  },
  {
    id: "90",
    ref: "189",
    name: "Electronic Device 90",
    categoryId: "1001",
    description: "Description for electronic device 90 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-90.jpg",
  },
  {
    id: "91",
    ref: "190",
    name: "Electronic Device 91",
    categoryId: "1001",
    description: "Description for electronic device 91 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-91.jpg",
  },
  {
    id: "92",
    ref: "191",
    name: "Electronic Device 92",
    categoryId: "1001",
    description: "Description for electronic device 92 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-92.jpg",
  },
  {
    id: "93",
    ref: "192",
    name: "Electronic Device 93",
    categoryId: "1001",
    description: "Description for electronic device 93 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-93.jpg",
  },
  {
    id: "94",
    ref: "193",
    name: "Electronic Device 94",
    categoryId: "1001",
    description: "Description for electronic device 94 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-94.jpg",
  },
  {
    id: "95",
    ref: "194",
    name: "Electronic Device 95",
    categoryId: "1001",
    description: "Description for electronic device 95 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-95.jpg",
  },
  {
    id: "96",
    ref: "195",
    name: "Electronic Device 96",
    categoryId: "1001",
    description: "Description for electronic device 96 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-96.jpg",
  },
  {
    id: "97",
    ref: "196",
    name: "Electronic Device 97",
    categoryId: "1001",
    description: "Description for electronic device 97 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-97.jpg",
  },
  {
    id: "98",
    ref: "197",
    name: "Electronic Device 98",
    categoryId: "1001",
    description: "Description for electronic device 98 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-98.jpg",
  },
  {
    id: "99",
    ref: "198",
    name: "Electronic Device 99",
    categoryId: "1001",
    description: "Description for electronic device 99 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-99.jpg",
  },
  {
    id: "100",
    ref: "199",
    name: "Electronic Device 100",
    categoryId: "1001",
    description:
      "Description for electronic device 100 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-100.jpg",
  },
  {
    id: "101",
    ref: "200",
    name: "Electronic Device 101",
    categoryId: "1001",
    description:
      "Description for electronic device 101 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-101.jpg",
  },
  {
    id: "102",
    ref: "201",
    name: "Electronic Device 102",
    categoryId: "1001",
    description:
      "Description for electronic device 102 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-102.jpg",
  },
  {
    id: "103",
    ref: "202",
    name: "Electronic Device 103",
    categoryId: "1001",
    description:
      "Description for electronic device 103 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-103.jpg",
  },
  {
    id: "104",
    ref: "203",
    name: "Electronic Device 104",
    categoryId: "1001",
    description:
      "Description for electronic device 104 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-104.jpg",
  },
  {
    id: "105",
    ref: "204",
    name: "Electronic Device 105",
    categoryId: "1001",
    description:
      "Description for electronic device 105 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-105.jpg",
  },
  {
    id: "106",
    ref: "205",
    name: "Electronic Device 106",
    categoryId: "1001",
    description:
      "Description for electronic device 106 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-106.jpg",
  },
  {
    id: "107",
    ref: "206",
    name: "Electronic Device 107",
    categoryId: "1001",
    description:
      "Description for electronic device 107 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-107.jpg",
  },
  {
    id: "108",
    ref: "207",
    name: "Electronic Device 108",
    categoryId: "1001",
    description:
      "Description for electronic device 108 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-108.jpg",
  },
  {
    id: "109",
    ref: "208",
    name: "Electronic Device 109",
    categoryId: "1001",
    description:
      "Description for electronic device 109 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-109.jpg",
  },
  {
    id: "110",
    ref: "209",
    name: "Electronic Device 110",
    categoryId: "1001",
    description:
      "Description for electronic device 110 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-110.jpg",
  },
  {
    id: "111",
    ref: "210",
    name: "Electronic Device 111",
    categoryId: "1001",
    description:
      "Description for electronic device 111 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-111.jpg",
  },
  {
    id: "112",
    ref: "211",
    name: "Electronic Device 112",
    categoryId: "1001",
    description:
      "Description for electronic device 112 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-112.jpg",
  },
  {
    id: "113",
    ref: "212",
    name: "Electronic Device 113",
    categoryId: "1001",
    description:
      "Description for electronic device 113 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-113.jpg",
  },
  {
    id: "114",
    ref: "213",
    name: "Electronic Device 114",
    categoryId: "1001",
    description:
      "Description for electronic device 114 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-114.jpg",
  },
  {
    id: "115",
    ref: "214",
    name: "Electronic Device 115",
    categoryId: "1001",
    description:
      "Description for electronic device 115 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-115.jpg",
  },
  {
    id: "116",
    ref: "215",
    name: "Electronic Device 116",
    categoryId: "1001",
    description:
      "Description for electronic device 116 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-116.jpg",
  },
  {
    id: "117",
    ref: "216",
    name: "Electronic Device 117",
    categoryId: "1001",
    description:
      "Description for electronic device 117 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-117.jpg",
  },
  {
    id: "118",
    ref: "217",
    name: "Electronic Device 118",
    categoryId: "1001",
    description:
      "Description for electronic device 118 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-118.jpg",
  },
  {
    id: "119",
    ref: "218",
    name: "Electronic Device 119",
    categoryId: "1001",
    description:
      "Description for electronic device 119 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-119.jpg",
  },
  {
    id: "120",
    ref: "219",
    name: "Electronic Device 120",
    categoryId: "1001",
    description:
      "Description for electronic device 120 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-120.jpg",
  },
  {
    id: "121",
    ref: "220",
    name: "Electronic Device 121",
    categoryId: "1001",
    description:
      "Description for electronic device 121 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-121.jpg",
  },
  {
    id: "122",
    ref: "221",
    name: "Electronic Device 122",
    categoryId: "1001",
    description:
      "Description for electronic device 122 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-122.jpg",
  },
  {
    id: "123",
    ref: "222",
    name: "Electronic Device 123",
    categoryId: "1001",
    description:
      "Description for electronic device 123 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-123.jpg",
  },
  {
    id: "124",
    ref: "223",
    name: "Electronic Device 124",
    categoryId: "1001",
    description:
      "Description for electronic device 124 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-124.jpg",
  },
  {
    id: "125",
    ref: "224",
    name: "Electronic Device 125",
    categoryId: "1001",
    description:
      "Description for electronic device 125 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-125.jpg",
  },
  {
    id: "126",
    ref: "225",
    name: "Electronic Device 126",
    categoryId: "1001",
    description:
      "Description for electronic device 126 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-126.jpg",
  },
  {
    id: "127",
    ref: "226",
    name: "Electronic Device 127",
    categoryId: "1001",
    description:
      "Description for electronic device 127 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-127.jpg",
  },
  {
    id: "128",
    ref: "227",
    name: "Electronic Device 128",
    categoryId: "1001",
    description:
      "Description for electronic device 128 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-128.jpg",
  },
  {
    id: "129",
    ref: "228",
    name: "Electronic Device 129",
    categoryId: "1001",
    description:
      "Description for electronic device 129 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-129.jpg",
  },
  {
    id: "130",
    ref: "229",
    name: "Electronic Device 130",
    categoryId: "1001",
    description:
      "Description for electronic device 130 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-130.jpg",
  },
  {
    id: "131",
    ref: "230",
    name: "Electronic Device 131",
    categoryId: "1001",
    description:
      "Description for electronic device 131 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-131.jpg",
  },
  {
    id: "132",
    ref: "231",
    name: "Electronic Device 132",
    categoryId: "1001",
    description:
      "Description for electronic device 132 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-132.jpg",
  },
  {
    id: "133",
    ref: "232",
    name: "Electronic Device 133",
    categoryId: "1001",
    description:
      "Description for electronic device 133 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-133.jpg",
  },
  {
    id: "134",
    ref: "233",
    name: "Electronic Device 134",
    categoryId: "1001",
    description:
      "Description for electronic device 134 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-134.jpg",
  },
  {
    id: "135",
    ref: "234",
    name: "Electronic Device 135",
    categoryId: "1001",
    description:
      "Description for electronic device 135 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-135.jpg",
  },
  {
    id: "136",
    ref: "235",
    name: "Electronic Device 136",
    categoryId: "1001",
    description:
      "Description for electronic device 136 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-136.jpg",
  },
  {
    id: "137",
    ref: "236",
    name: "Electronic Device 137",
    categoryId: "1001",
    description:
      "Description for electronic device 137 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-137.jpg",
  },
  {
    id: "138",
    ref: "237",
    name: "Electronic Device 138",
    categoryId: "1001",
    description:
      "Description for electronic device 138 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-138.jpg",
  },
  {
    id: "139",
    ref: "238",
    name: "Electronic Device 139",
    categoryId: "1001",
    description:
      "Description for electronic device 139 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-139.jpg",
  },
  {
    id: "140",
    ref: "239",
    name: "Electronic Device 140",
    categoryId: "1001",
    description:
      "Description for electronic device 140 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-140.jpg",
  },
  {
    id: "141",
    ref: "240",
    name: "Electronic Device 141",
    categoryId: "1001",
    description:
      "Description for electronic device 141 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-141.jpg",
  },
  {
    id: "142",
    ref: "241",
    name: "Electronic Device 142",
    categoryId: "1001",
    description:
      "Description for electronic device 142 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-142.jpg",
  },
  {
    id: "143",
    ref: "242",
    name: "Electronic Device 143",
    categoryId: "1001",
    description:
      "Description for electronic device 143 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-143.jpg",
  },
  {
    id: "144",
    ref: "243",
    name: "Electronic Device 144",
    categoryId: "1001",
    description:
      "Description for electronic device 144 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-144.jpg",
  },
  {
    id: "145",
    ref: "244",
    name: "Electronic Device 145",
    categoryId: "1001",
    description:
      "Description for electronic device 145 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-145.jpg",
  },
  {
    id: "146",
    ref: "245",
    name: "Electronic Device 146",
    categoryId: "1001",
    description:
      "Description for electronic device 146 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-146.jpg",
  },
  {
    id: "147",
    ref: "246",
    name: "Electronic Device 147",
    categoryId: "1001",
    description:
      "Description for electronic device 147 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-147.jpg",
  },
  {
    id: "148",
    ref: "247",
    name: "Electronic Device 148",
    categoryId: "1001",
    description:
      "Description for electronic device 148 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-148.jpg",
  },
  {
    id: "149",
    ref: "248",
    name: "Electronic Device 149",
    categoryId: "1001",
    description:
      "Description for electronic device 149 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-149.jpg",
  },
  {
    id: "150",
    ref: "249",
    name: "Electronic Device 150",
    categoryId: "1001",
    description:
      "Description for electronic device 150 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-150.jpg",
  },
  {
    id: "151",
    ref: "250",
    name: "Electronic Device 151",
    categoryId: "1001",
    description:
      "Description for electronic device 151 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-151.jpg",
  },
  {
    id: "152",
    ref: "251",
    name: "Electronic Device 152",
    categoryId: "1001",
    description:
      "Description for electronic device 152 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-152.jpg",
  },
  {
    id: "153",
    ref: "252",
    name: "Electronic Device 153",
    categoryId: "1001",
    description:
      "Description for electronic device 153 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-153.jpg",
  },
  {
    id: "154",
    ref: "253",
    name: "Electronic Device 154",
    categoryId: "1001",
    description:
      "Description for electronic device 154 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-154.jpg",
  },
  {
    id: "155",
    ref: "254",
    name: "Electronic Device 155",
    categoryId: "1001",
    description:
      "Description for electronic device 155 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-155.jpg",
  },
  {
    id: "156",
    ref: "255",
    name: "Electronic Device 156",
    categoryId: "1001",
    description:
      "Description for electronic device 156 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-156.jpg",
  },
  {
    id: "157",
    ref: "256",
    name: "Electronic Device 157",
    categoryId: "1001",
    description:
      "Description for electronic device 157 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-157.jpg",
  },
  {
    id: "158",
    ref: "257",
    name: "Electronic Device 158",
    categoryId: "1001",
    description:
      "Description for electronic device 158 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-158.jpg",
  },
  {
    id: "159",
    ref: "258",
    name: "Electronic Device 159",
    categoryId: "1001",
    description:
      "Description for electronic device 159 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-159.jpg",
  },
  {
    id: "160",
    ref: "259",
    name: "Electronic Device 160",
    categoryId: "1001",
    description:
      "Description for electronic device 160 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-160.jpg",
  },
  {
    id: "161",
    ref: "260",
    name: "Electronic Device 161",
    categoryId: "1001",
    description:
      "Description for electronic device 161 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-161.jpg",
  },
  {
    id: "162",
    ref: "261",
    name: "Electronic Device 162",
    categoryId: "1001",
    description:
      "Description for electronic device 162 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-162.jpg",
  },
  {
    id: "163",
    ref: "262",
    name: "Electronic Device 163",
    categoryId: "1001",
    description:
      "Description for electronic device 163 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-163.jpg",
  },
  {
    id: "164",
    ref: "263",
    name: "Electronic Device 164",
    categoryId: "1001",
    description:
      "Description for electronic device 164 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-164.jpg",
  },
  {
    id: "165",
    ref: "264",
    name: "Electronic Device 165",
    categoryId: "1001",
    description:
      "Description for electronic device 165 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-165.jpg",
  },
  {
    id: "166",
    ref: "265",
    name: "Electronic Device 166",
    categoryId: "1001",
    description:
      "Description for electronic device 166 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-166.jpg",
  },
  {
    id: "167",
    ref: "266",
    name: "Electronic Device 167",
    categoryId: "1001",
    description:
      "Description for electronic device 167 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-167.jpg",
  },
  {
    id: "168",
    ref: "267",
    name: "Electronic Device 168",
    categoryId: "1001",
    description:
      "Description for electronic device 168 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-168.jpg",
  },
  {
    id: "169",
    ref: "268",
    name: "Electronic Device 169",
    categoryId: "1001",
    description:
      "Description for electronic device 169 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-169.jpg",
  },
  {
    id: "170",
    ref: "269",
    name: "Electronic Device 170",
    categoryId: "1001",
    description:
      "Description for electronic device 170 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-170.jpg",
  },
  {
    id: "171",
    ref: "270",
    name: "Electronic Device 171",
    categoryId: "1001",
    description:
      "Description for electronic device 171 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-171.jpg",
  },
  {
    id: "172",
    ref: "271",
    name: "Electronic Device 172",
    categoryId: "1001",
    description:
      "Description for electronic device 172 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-172.jpg",
  },
  {
    id: "173",
    ref: "272",
    name: "Electronic Device 173",
    categoryId: "1001",
    description:
      "Description for electronic device 173 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-173.jpg",
  },
  {
    id: "174",
    ref: "273",
    name: "Electronic Device 174",
    categoryId: "1001",
    description:
      "Description for electronic device 174 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-174.jpg",
  },
  {
    id: "175",
    ref: "274",
    name: "Electronic Device 175",
    categoryId: "1001",
    description:
      "Description for electronic device 175 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-175.jpg",
  },
  {
    id: "176",
    ref: "275",
    name: "Electronic Device 176",
    categoryId: "1001",
    description:
      "Description for electronic device 176 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-176.jpg",
  },
  {
    id: "177",
    ref: "276",
    name: "Electronic Device 177",
    categoryId: "1001",
    description:
      "Description for electronic device 177 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-177.jpg",
  },
  {
    id: "178",
    ref: "277",
    name: "Electronic Device 178",
    categoryId: "1001",
    description:
      "Description for electronic device 178 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-178.jpg",
  },
  {
    id: "179",
    ref: "278",
    name: "Electronic Device 179",
    categoryId: "1001",
    description:
      "Description for electronic device 179 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-179.jpg",
  },
  {
    id: "180",
    ref: "279",
    name: "Electronic Device 180",
    categoryId: "1001",
    description:
      "Description for electronic device 180 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-180.jpg",
  },
  {
    id: "181",
    ref: "280",
    name: "Electronic Device 181",
    categoryId: "1001",
    description:
      "Description for electronic device 181 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-181.jpg",
  },
  {
    id: "182",
    ref: "281",
    name: "Electronic Device 182",
    categoryId: "1001",
    description:
      "Description for electronic device 182 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-182.jpg",
  },
  {
    id: "183",
    ref: "282",
    name: "Electronic Device 183",
    categoryId: "1001",
    description:
      "Description for electronic device 183 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-183.jpg",
  },
  {
    id: "184",
    ref: "283",
    name: "Electronic Device 184",
    categoryId: "1001",
    description:
      "Description for electronic device 184 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-184.jpg",
  },
  {
    id: "185",
    ref: "284",
    name: "Electronic Device 185",
    categoryId: "1001",
    description:
      "Description for electronic device 185 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-185.jpg",
  },
  {
    id: "186",
    ref: "285",
    name: "Electronic Device 186",
    categoryId: "1001",
    description:
      "Description for electronic device 186 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-186.jpg",
  },
  {
    id: "187",
    ref: "286",
    name: "Electronic Device 187",
    categoryId: "1001",
    description:
      "Description for electronic device 187 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-187.jpg",
  },
  {
    id: "188",
    ref: "287",
    name: "Electronic Device 188",
    categoryId: "1001",
    description:
      "Description for electronic device 188 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-188.jpg",
  },
  {
    id: "189",
    ref: "288",
    name: "Electronic Device 189",
    categoryId: "1001",
    description:
      "Description for electronic device 189 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-189.jpg",
  },
  {
    id: "190",
    ref: "289",
    name: "Electronic Device 190",
    categoryId: "1001",
    description:
      "Description for electronic device 190 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-190.jpg",
  },
  {
    id: "191",
    ref: "290",
    name: "Electronic Device 191",
    categoryId: "1001",
    description:
      "Description for electronic device 191 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-191.jpg",
  },
  {
    id: "192",
    ref: "291",
    name: "Electronic Device 192",
    categoryId: "1001",
    description:
      "Description for electronic device 192 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-192.jpg",
  },
  {
    id: "193",
    ref: "292",
    name: "Electronic Device 193",
    categoryId: "1001",
    description:
      "Description for electronic device 193 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-193.jpg",
  },
  {
    id: "194",
    ref: "293",
    name: "Electronic Device 194",
    categoryId: "1001",
    description:
      "Description for electronic device 194 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-194.jpg",
  },
  {
    id: "195",
    ref: "294",
    name: "Electronic Device 195",
    categoryId: "1001",
    description:
      "Description for electronic device 195 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-195.jpg",
  },
  {
    id: "196",
    ref: "295",
    name: "Electronic Device 196",
    categoryId: "1001",
    description:
      "Description for electronic device 196 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-196.jpg",
  },
  {
    id: "197",
    ref: "296",
    name: "Electronic Device 197",
    categoryId: "1001",
    description:
      "Description for electronic device 197 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-197.jpg",
  },
  {
    id: "198",
    ref: "297",
    name: "Electronic Device 198",
    categoryId: "1001",
    description:
      "Description for electronic device 198 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-198.jpg",
  },
  {
    id: "199",
    ref: "298",
    name: "Electronic Device 199",
    categoryId: "1001",
    description:
      "Description for electronic device 199 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-199.jpg",
  },
  {
    id: "200",
    ref: "299",
    name: "Electronic Device 200",
    categoryId: "1001",
    description:
      "Description for electronic device 200 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-200.jpg",
  },
  {
    id: "201",
    ref: "300",
    name: "Electronic Device 201",
    categoryId: "1001",
    description:
      "Description for electronic device 201 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-201.jpg",
  },
  {
    id: "202",
    ref: "301",
    name: "Electronic Device 202",
    categoryId: "1001",
    description:
      "Description for electronic device 202 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-202.jpg",
  },
  {
    id: "203",
    ref: "302",
    name: "Electronic Device 203",
    categoryId: "1001",
    description:
      "Description for electronic device 203 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-203.jpg",
  },
  {
    id: "204",
    ref: "303",
    name: "Electronic Device 204",
    categoryId: "1001",
    description:
      "Description for electronic device 204 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-204.jpg",
  },
  {
    id: "205",
    ref: "304",
    name: "Electronic Device 205",
    categoryId: "1001",
    description:
      "Description for electronic device 205 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-205.jpg",
  },
  {
    id: "206",
    ref: "305",
    name: "Electronic Device 206",
    categoryId: "1001",
    description:
      "Description for electronic device 206 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-206.jpg",
  },
  {
    id: "207",
    ref: "306",
    name: "Electronic Device 207",
    categoryId: "1001",
    description:
      "Description for electronic device 207 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-207.jpg",
  },
  {
    id: "208",
    ref: "307",
    name: "Electronic Device 208",
    categoryId: "1001",
    description:
      "Description for electronic device 208 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-208.jpg",
  },
  {
    id: "209",
    ref: "308",
    name: "Electronic Device 209",
    categoryId: "1001",
    description:
      "Description for electronic device 209 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-209.jpg",
  },
  {
    id: "210",
    ref: "309",
    name: "Electronic Device 210",
    categoryId: "1001",
    description:
      "Description for electronic device 210 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-210.jpg",
  },
  {
    id: "211",
    ref: "310",
    name: "Electronic Device 211",
    categoryId: "1001",
    description:
      "Description for electronic device 211 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-211.jpg",
  },
  {
    id: "212",
    ref: "311",
    name: "Electronic Device 212",
    categoryId: "1001",
    description:
      "Description for electronic device 212 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-212.jpg",
  },
  {
    id: "213",
    ref: "312",
    name: "Electronic Device 213",
    categoryId: "1001",
    description:
      "Description for electronic device 213 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-213.jpg",
  },
  {
    id: "214",
    ref: "313",
    name: "Electronic Device 214",
    categoryId: "1001",
    description:
      "Description for electronic device 214 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-214.jpg",
  },
  {
    id: "215",
    ref: "314",
    name: "Electronic Device 215",
    categoryId: "1001",
    description:
      "Description for electronic device 215 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-215.jpg",
  },
  {
    id: "216",
    ref: "315",
    name: "Electronic Device 216",
    categoryId: "1001",
    description:
      "Description for electronic device 216 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-216.jpg",
  },
  {
    id: "217",
    ref: "316",
    name: "Electronic Device 217",
    categoryId: "1001",
    description:
      "Description for electronic device 217 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-217.jpg",
  },
  {
    id: "218",
    ref: "317",
    name: "Electronic Device 218",
    categoryId: "1001",
    description:
      "Description for electronic device 218 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-218.jpg",
  },
  {
    id: "219",
    ref: "318",
    name: "Electronic Device 219",
    categoryId: "1001",
    description:
      "Description for electronic device 219 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-219.jpg",
  },
  {
    id: "220",
    ref: "319",
    name: "Electronic Device 220",
    categoryId: "1001",
    description:
      "Description for electronic device 220 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-220.jpg",
  },
  {
    id: "221",
    ref: "320",
    name: "Electronic Device 221",
    categoryId: "1001",
    description:
      "Description for electronic device 221 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-221.jpg",
  },
  {
    id: "222",
    ref: "321",
    name: "Electronic Device 222",
    categoryId: "1001",
    description:
      "Description for electronic device 222 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-222.jpg",
  },
  {
    id: "223",
    ref: "322",
    name: "Electronic Device 223",
    categoryId: "1001",
    description:
      "Description for electronic device 223 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-223.jpg",
  },
  {
    id: "224",
    ref: "323",
    name: "Electronic Device 224",
    categoryId: "1001",
    description:
      "Description for electronic device 224 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-224.jpg",
  },
  {
    id: "225",
    ref: "324",
    name: "Electronic Device 225",
    categoryId: "1001",
    description:
      "Description for electronic device 225 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-225.jpg",
  },
  {
    id: "226",
    ref: "325",
    name: "Electronic Device 226",
    categoryId: "1001",
    description:
      "Description for electronic device 226 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-226.jpg",
  },
  {
    id: "227",
    ref: "326",
    name: "Electronic Device 227",
    categoryId: "1001",
    description:
      "Description for electronic device 227 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-227.jpg",
  },
  {
    id: "228",
    ref: "327",
    name: "Electronic Device 228",
    categoryId: "1001",
    description:
      "Description for electronic device 228 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-228.jpg",
  },
  {
    id: "229",
    ref: "328",
    name: "Electronic Device 229",
    categoryId: "1001",
    description:
      "Description for electronic device 229 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-229.jpg",
  },
  {
    id: "230",
    ref: "329",
    name: "Electronic Device 230",
    categoryId: "1001",
    description:
      "Description for electronic device 230 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-230.jpg",
  },
  {
    id: "231",
    ref: "330",
    name: "Electronic Device 231",
    categoryId: "1001",
    description:
      "Description for electronic device 231 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-231.jpg",
  },
  {
    id: "232",
    ref: "331",
    name: "Electronic Device 232",
    categoryId: "1001",
    description:
      "Description for electronic device 232 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-232.jpg",
  },
  {
    id: "233",
    ref: "332",
    name: "Electronic Device 233",
    categoryId: "1001",
    description:
      "Description for electronic device 233 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-233.jpg",
  },
  {
    id: "234",
    ref: "333",
    name: "Electronic Device 234",
    categoryId: "1001",
    description:
      "Description for electronic device 234 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-234.jpg",
  },
  {
    id: "235",
    ref: "334",
    name: "Electronic Device 235",
    categoryId: "1001",
    description:
      "Description for electronic device 235 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-235.jpg",
  },
  {
    id: "236",
    ref: "335",
    name: "Electronic Device 236",
    categoryId: "1001",
    description:
      "Description for electronic device 236 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-236.jpg",
  },
  {
    id: "237",
    ref: "336",
    name: "Electronic Device 237",
    categoryId: "1001",
    description:
      "Description for electronic device 237 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-237.jpg",
  },
  {
    id: "238",
    ref: "337",
    name: "Electronic Device 238",
    categoryId: "1001",
    description:
      "Description for electronic device 238 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-238.jpg",
  },
  {
    id: "239",
    ref: "338",
    name: "Electronic Device 239",
    categoryId: "1001",
    description:
      "Description for electronic device 239 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-239.jpg",
  },
  {
    id: "240",
    ref: "339",
    name: "Electronic Device 240",
    categoryId: "1001",
    description:
      "Description for electronic device 240 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-240.jpg",
  },
  {
    id: "241",
    ref: "340",
    name: "Electronic Device 241",
    categoryId: "1001",
    description:
      "Description for electronic device 241 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-241.jpg",
  },
  {
    id: "242",
    ref: "341",
    name: "Electronic Device 242",
    categoryId: "1001",
    description:
      "Description for electronic device 242 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-242.jpg",
  },
  {
    id: "243",
    ref: "342",
    name: "Electronic Device 243",
    categoryId: "1001",
    description:
      "Description for electronic device 243 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-243.jpg",
  },
  {
    id: "244",
    ref: "343",
    name: "Electronic Device 244",
    categoryId: "1001",
    description:
      "Description for electronic device 244 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-244.jpg",
  },
  {
    id: "245",
    ref: "344",
    name: "Electronic Device 245",
    categoryId: "1001",
    description:
      "Description for electronic device 245 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-245.jpg",
  },
  {
    id: "246",
    ref: "345",
    name: "Electronic Device 246",
    categoryId: "1001",
    description:
      "Description for electronic device 246 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-246.jpg",
  },
  {
    id: "247",
    ref: "346",
    name: "Electronic Device 247",
    categoryId: "1001",
    description:
      "Description for electronic device 247 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-247.jpg",
  },
  {
    id: "248",
    ref: "347",
    name: "Electronic Device 248",
    categoryId: "1001",
    description:
      "Description for electronic device 248 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-248.jpg",
  },
  {
    id: "249",
    ref: "348",
    name: "Electronic Device 249",
    categoryId: "1001",
    description:
      "Description for electronic device 249 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-249.jpg",
  },
  {
    id: "250",
    ref: "349",
    name: "Electronic Device 250",
    categoryId: "1001",
    description:
      "Description for electronic device 250 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-250.jpg",
  },
  {
    id: "251",
    ref: "350",
    name: "Electronic Device 251",
    categoryId: "1001",
    description:
      "Description for electronic device 251 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-251.jpg",
  },
  {
    id: "252",
    ref: "351",
    name: "Electronic Device 252",
    categoryId: "1001",
    description:
      "Description for electronic device 252 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-252.jpg",
  },
  {
    id: "253",
    ref: "352",
    name: "Electronic Device 253",
    categoryId: "1001",
    description:
      "Description for electronic device 253 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-253.jpg",
  },
  {
    id: "254",
    ref: "353",
    name: "Electronic Device 254",
    categoryId: "1001",
    description:
      "Description for electronic device 254 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-254.jpg",
  },
  {
    id: "255",
    ref: "354",
    name: "Electronic Device 255",
    categoryId: "1001",
    description:
      "Description for electronic device 255 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-255.jpg",
  },
  {
    id: "256",
    ref: "355",
    name: "Electronic Device 256",
    categoryId: "1001",
    description:
      "Description for electronic device 256 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-256.jpg",
  },
  {
    id: "257",
    ref: "356",
    name: "Electronic Device 257",
    categoryId: "1001",
    description:
      "Description for electronic device 257 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-257.jpg",
  },
  {
    id: "258",
    ref: "357",
    name: "Electronic Device 258",
    categoryId: "1001",
    description:
      "Description for electronic device 258 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-258.jpg",
  },
  {
    id: "259",
    ref: "358",
    name: "Electronic Device 259",
    categoryId: "1001",
    description:
      "Description for electronic device 259 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-259.jpg",
  },
  {
    id: "260",
    ref: "359",
    name: "Electronic Device 260",
    categoryId: "1001",
    description:
      "Description for electronic device 260 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-260.jpg",
  },
  {
    id: "261",
    ref: "360",
    name: "Electronic Device 261",
    categoryId: "1001",
    description:
      "Description for electronic device 261 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-261.jpg",
  },
  {
    id: "262",
    ref: "361",
    name: "Electronic Device 262",
    categoryId: "1001",
    description:
      "Description for electronic device 262 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-262.jpg",
  },
  {
    id: "263",
    ref: "362",
    name: "Electronic Device 263",
    categoryId: "1001",
    description:
      "Description for electronic device 263 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-263.jpg",
  },
  {
    id: "264",
    ref: "363",
    name: "Electronic Device 264",
    categoryId: "1001",
    description:
      "Description for electronic device 264 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-264.jpg",
  },
  {
    id: "265",
    ref: "364",
    name: "Electronic Device 265",
    categoryId: "1001",
    description:
      "Description for electronic device 265 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-265.jpg",
  },
  {
    id: "266",
    ref: "365",
    name: "Electronic Device 266",
    categoryId: "1001",
    description:
      "Description for electronic device 266 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-266.jpg",
  },
  {
    id: "267",
    ref: "366",
    name: "Electronic Device 267",
    categoryId: "1001",
    description:
      "Description for electronic device 267 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-267.jpg",
  },
  {
    id: "268",
    ref: "367",
    name: "Electronic Device 268",
    categoryId: "1001",
    description:
      "Description for electronic device 268 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-268.jpg",
  },
  {
    id: "269",
    ref: "368",
    name: "Electronic Device 269",
    categoryId: "1001",
    description:
      "Description for electronic device 269 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-269.jpg",
  },
  {
    id: "270",
    ref: "369",
    name: "Electronic Device 270",
    categoryId: "1001",
    description:
      "Description for electronic device 270 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-270.jpg",
  },
  {
    id: "271",
    ref: "370",
    name: "Electronic Device 271",
    categoryId: "1001",
    description:
      "Description for electronic device 271 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-271.jpg",
  },
  {
    id: "272",
    ref: "371",
    name: "Electronic Device 272",
    categoryId: "1001",
    description:
      "Description for electronic device 272 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-272.jpg",
  },
  {
    id: "273",
    ref: "372",
    name: "Electronic Device 273",
    categoryId: "1001",
    description:
      "Description for electronic device 273 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-273.jpg",
  },
  {
    id: "274",
    ref: "373",
    name: "Electronic Device 274",
    categoryId: "1001",
    description:
      "Description for electronic device 274 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-274.jpg",
  },
  {
    id: "275",
    ref: "374",
    name: "Electronic Device 275",
    categoryId: "1001",
    description:
      "Description for electronic device 275 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-275.jpg",
  },
  {
    id: "276",
    ref: "375",
    name: "Electronic Device 276",
    categoryId: "1001",
    description:
      "Description for electronic device 276 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-276.jpg",
  },
  {
    id: "277",
    ref: "376",
    name: "Electronic Device 277",
    categoryId: "1001",
    description:
      "Description for electronic device 277 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-277.jpg",
  },
  {
    id: "278",
    ref: "377",
    name: "Electronic Device 278",
    categoryId: "1001",
    description:
      "Description for electronic device 278 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-278.jpg",
  },
  {
    id: "279",
    ref: "378",
    name: "Electronic Device 279",
    categoryId: "1001",
    description:
      "Description for electronic device 279 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-279.jpg",
  },
  {
    id: "280",
    ref: "379",
    name: "Electronic Device 280",
    categoryId: "1001",
    description:
      "Description for electronic device 280 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-280.jpg",
  },
  {
    id: "281",
    ref: "380",
    name: "Electronic Device 281",
    categoryId: "1001",
    description:
      "Description for electronic device 281 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-281.jpg",
  },
  {
    id: "282",
    ref: "381",
    name: "Electronic Device 282",
    categoryId: "1001",
    description:
      "Description for electronic device 282 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-282.jpg",
  },
  {
    id: "283",
    ref: "382",
    name: "Electronic Device 283",
    categoryId: "1001",
    description:
      "Description for electronic device 283 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-283.jpg",
  },
  {
    id: "284",
    ref: "383",
    name: "Electronic Device 284",
    categoryId: "1001",
    description:
      "Description for electronic device 284 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-284.jpg",
  },
  {
    id: "285",
    ref: "384",
    name: "Electronic Device 285",
    categoryId: "1001",
    description:
      "Description for electronic device 285 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-285.jpg",
  },
  {
    id: "286",
    ref: "385",
    name: "Electronic Device 286",
    categoryId: "1001",
    description:
      "Description for electronic device 286 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-286.jpg",
  },
  {
    id: "287",
    ref: "386",
    name: "Electronic Device 287",
    categoryId: "1001",
    description:
      "Description for electronic device 287 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-287.jpg",
  },
  {
    id: "288",
    ref: "387",
    name: "Electronic Device 288",
    categoryId: "1001",
    description:
      "Description for electronic device 288 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-288.jpg",
  },
  {
    id: "289",
    ref: "388",
    name: "Electronic Device 289",
    categoryId: "1001",
    description:
      "Description for electronic device 289 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-289.jpg",
  },
  {
    id: "290",
    ref: "389",
    name: "Electronic Device 290",
    categoryId: "1001",
    description:
      "Description for electronic device 290 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-290.jpg",
  },
  {
    id: "291",
    ref: "390",
    name: "Electronic Device 291",
    categoryId: "1001",
    description:
      "Description for electronic device 291 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-291.jpg",
  },
  {
    id: "292",
    ref: "391",
    name: "Electronic Device 292",
    categoryId: "1001",
    description:
      "Description for electronic device 292 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-292.jpg",
  },
  {
    id: "293",
    ref: "392",
    name: "Electronic Device 293",
    categoryId: "1001",
    description:
      "Description for electronic device 293 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-293.jpg",
  },
  {
    id: "294",
    ref: "393",
    name: "Electronic Device 294",
    categoryId: "1001",
    description:
      "Description for electronic device 294 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-294.jpg",
  },
  {
    id: "295",
    ref: "394",
    name: "Electronic Device 295",
    categoryId: "1001",
    description:
      "Description for electronic device 295 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-295.jpg",
  },
  {
    id: "296",
    ref: "395",
    name: "Electronic Device 296",
    categoryId: "1001",
    description:
      "Description for electronic device 296 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-296.jpg",
  },
  {
    id: "297",
    ref: "396",
    name: "Electronic Device 297",
    categoryId: "1001",
    description:
      "Description for electronic device 297 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-297.jpg",
  },
  {
    id: "298",
    ref: "397",
    name: "Electronic Device 298",
    categoryId: "1001",
    description:
      "Description for electronic device 298 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-298.jpg",
  },
  {
    id: "299",
    ref: "398",
    name: "Electronic Device 299",
    categoryId: "1001",
    description:
      "Description for electronic device 299 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-299.jpg",
  },
  {
    id: "300",
    ref: "399",
    name: "Electronic Device 300",
    categoryId: "1001",
    description:
      "Description for electronic device 300 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-300.jpg",
  },
  {
    id: "301",
    ref: "400",
    name: "Electronic Device 301",
    categoryId: "1001",
    description:
      "Description for electronic device 301 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-301.jpg",
  },
  {
    id: "302",
    ref: "401",
    name: "Electronic Device 302",
    categoryId: "1001",
    description:
      "Description for electronic device 302 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-302.jpg",
  },
  {
    id: "303",
    ref: "402",
    name: "Electronic Device 303",
    categoryId: "1001",
    description:
      "Description for electronic device 303 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-303.jpg",
  },
  {
    id: "304",
    ref: "403",
    name: "Electronic Device 304",
    categoryId: "1001",
    description:
      "Description for electronic device 304 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-304.jpg",
  },
  {
    id: "305",
    ref: "404",
    name: "Electronic Device 305",
    categoryId: "1001",
    description:
      "Description for electronic device 305 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-305.jpg",
  },
  {
    id: "306",
    ref: "405",
    name: "Electronic Device 306",
    categoryId: "1001",
    description:
      "Description for electronic device 306 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-306.jpg",
  },
  {
    id: "307",
    ref: "406",
    name: "Electronic Device 307",
    categoryId: "1001",
    description:
      "Description for electronic device 307 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-307.jpg",
  },
  {
    id: "308",
    ref: "407",
    name: "Electronic Device 308",
    categoryId: "1001",
    description:
      "Description for electronic device 308 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-308.jpg",
  },
  {
    id: "309",
    ref: "408",
    name: "Electronic Device 309",
    categoryId: "1001",
    description:
      "Description for electronic device 309 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-309.jpg",
  },
  {
    id: "310",
    ref: "409",
    name: "Electronic Device 310",
    categoryId: "1001",
    description:
      "Description for electronic device 310 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-310.jpg",
  },
  {
    id: "311",
    ref: "410",
    name: "Electronic Device 311",
    categoryId: "1001",
    description:
      "Description for electronic device 311 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-311.jpg",
  },
  {
    id: "312",
    ref: "411",
    name: "Electronic Device 312",
    categoryId: "1001",
    description:
      "Description for electronic device 312 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-312.jpg",
  },
  {
    id: "313",
    ref: "412",
    name: "Electronic Device 313",
    categoryId: "1001",
    description:
      "Description for electronic device 313 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-313.jpg",
  },
  {
    id: "314",
    ref: "413",
    name: "Electronic Device 314",
    categoryId: "1001",
    description:
      "Description for electronic device 314 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-314.jpg",
  },
  {
    id: "315",
    ref: "414",
    name: "Electronic Device 315",
    categoryId: "1001",
    description:
      "Description for electronic device 315 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-315.jpg",
  },
  {
    id: "316",
    ref: "415",
    name: "Electronic Device 316",
    categoryId: "1001",
    description:
      "Description for electronic device 316 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-316.jpg",
  },
  {
    id: "317",
    ref: "416",
    name: "Electronic Device 317",
    categoryId: "1001",
    description:
      "Description for electronic device 317 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-317.jpg",
  },
  {
    id: "318",
    ref: "417",
    name: "Electronic Device 318",
    categoryId: "1001",
    description:
      "Description for electronic device 318 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-318.jpg",
  },
  {
    id: "319",
    ref: "418",
    name: "Electronic Device 319",
    categoryId: "1001",
    description:
      "Description for electronic device 319 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-319.jpg",
  },
  {
    id: "320",
    ref: "419",
    name: "Electronic Device 320",
    categoryId: "1001",
    description:
      "Description for electronic device 320 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-320.jpg",
  },
  {
    id: "321",
    ref: "420",
    name: "Electronic Device 321",
    categoryId: "1001",
    description:
      "Description for electronic device 321 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-321.jpg",
  },
  {
    id: "322",
    ref: "421",
    name: "Electronic Device 322",
    categoryId: "1001",
    description:
      "Description for electronic device 322 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-322.jpg",
  },
  {
    id: "323",
    ref: "422",
    name: "Electronic Device 323",
    categoryId: "1001",
    description:
      "Description for electronic device 323 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-323.jpg",
  },
  {
    id: "324",
    ref: "423",
    name: "Electronic Device 324",
    categoryId: "1001",
    description:
      "Description for electronic device 324 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-324.jpg",
  },
  {
    id: "325",
    ref: "424",
    name: "Electronic Device 325",
    categoryId: "1001",
    description:
      "Description for electronic device 325 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-325.jpg",
  },
  {
    id: "326",
    ref: "425",
    name: "Electronic Device 326",
    categoryId: "1001",
    description:
      "Description for electronic device 326 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-326.jpg",
  },
  {
    id: "327",
    ref: "426",
    name: "Electronic Device 327",
    categoryId: "1001",
    description:
      "Description for electronic device 327 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-327.jpg",
  },
  {
    id: "328",
    ref: "427",
    name: "Electronic Device 328",
    categoryId: "1001",
    description:
      "Description for electronic device 328 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-328.jpg",
  },
  {
    id: "329",
    ref: "428",
    name: "Electronic Device 329",
    categoryId: "1001",
    description:
      "Description for electronic device 329 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-329.jpg",
  },
  {
    id: "330",
    ref: "429",
    name: "Electronic Device 330",
    categoryId: "1001",
    description:
      "Description for electronic device 330 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-330.jpg",
  },
  {
    id: "331",
    ref: "430",
    name: "Electronic Device 331",
    categoryId: "1001",
    description:
      "Description for electronic device 331 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-331.jpg",
  },
  {
    id: "332",
    ref: "431",
    name: "Electronic Device 332",
    categoryId: "1001",
    description:
      "Description for electronic device 332 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-332.jpg",
  },
  {
    id: "333",
    ref: "432",
    name: "Electronic Device 333",
    categoryId: "1001",
    description:
      "Description for electronic device 333 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-333.jpg",
  },
  {
    id: "334",
    ref: "433",
    name: "Electronic Device 334",
    categoryId: "1001",
    description:
      "Description for electronic device 334 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-334.jpg",
  },
  {
    id: "335",
    ref: "434",
    name: "Electronic Device 335",
    categoryId: "1001",
    description:
      "Description for electronic device 335 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-335.jpg",
  },
  {
    id: "336",
    ref: "435",
    name: "Electronic Device 336",
    categoryId: "1001",
    description:
      "Description for electronic device 336 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-336.jpg",
  },
  {
    id: "337",
    ref: "436",
    name: "Electronic Device 337",
    categoryId: "1001",
    description:
      "Description for electronic device 337 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-337.jpg",
  },
  {
    id: "338",
    ref: "437",
    name: "Electronic Device 338",
    categoryId: "1001",
    description:
      "Description for electronic device 338 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-338.jpg",
  },
  {
    id: "339",
    ref: "438",
    name: "Electronic Device 339",
    categoryId: "1001",
    description:
      "Description for electronic device 339 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-339.jpg",
  },
  {
    id: "340",
    ref: "439",
    name: "Electronic Device 340",
    categoryId: "1001",
    description:
      "Description for electronic device 340 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-340.jpg",
  },
  {
    id: "341",
    ref: "440",
    name: "Electronic Device 341",
    categoryId: "1001",
    description:
      "Description for electronic device 341 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-341.jpg",
  },
  {
    id: "342",
    ref: "441",
    name: "Electronic Device 342",
    categoryId: "1001",
    description:
      "Description for electronic device 342 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-342.jpg",
  },
  {
    id: "343",
    ref: "442",
    name: "Electronic Device 343",
    categoryId: "1001",
    description:
      "Description for electronic device 343 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-343.jpg",
  },
  {
    id: "344",
    ref: "443",
    name: "Electronic Device 344",
    categoryId: "1001",
    description:
      "Description for electronic device 344 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-344.jpg",
  },
  {
    id: "345",
    ref: "444",
    name: "Electronic Device 345",
    categoryId: "1001",
    description:
      "Description for electronic device 345 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-345.jpg",
  },
  {
    id: "346",
    ref: "445",
    name: "Electronic Device 346",
    categoryId: "1001",
    description:
      "Description for electronic device 346 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-346.jpg",
  },
  {
    id: "347",
    ref: "446",
    name: "Electronic Device 347",
    categoryId: "1001",
    description:
      "Description for electronic device 347 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-347.jpg",
  },
  {
    id: "348",
    ref: "447",
    name: "Electronic Device 348",
    categoryId: "1001",
    description:
      "Description for electronic device 348 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-348.jpg",
  },
  {
    id: "349",
    ref: "448",
    name: "Electronic Device 349",
    categoryId: "1001",
    description:
      "Description for electronic device 349 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-349.jpg",
  },
  {
    id: "350",
    ref: "449",
    name: "Electronic Device 350",
    categoryId: "1001",
    description:
      "Description for electronic device 350 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-350.jpg",
  },
  {
    id: "351",
    ref: "450",
    name: "Electronic Device 351",
    categoryId: "1001",
    description:
      "Description for electronic device 351 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-351.jpg",
  },
  {
    id: "352",
    ref: "451",
    name: "Electronic Device 352",
    categoryId: "1001",
    description:
      "Description for electronic device 352 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-352.jpg",
  },
  {
    id: "353",
    ref: "452",
    name: "Electronic Device 353",
    categoryId: "1001",
    description:
      "Description for electronic device 353 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-353.jpg",
  },
  {
    id: "354",
    ref: "453",
    name: "Electronic Device 354",
    categoryId: "1001",
    description:
      "Description for electronic device 354 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-354.jpg",
  },
  {
    id: "355",
    ref: "454",
    name: "Electronic Device 355",
    categoryId: "1001",
    description:
      "Description for electronic device 355 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-355.jpg",
  },
  {
    id: "356",
    ref: "455",
    name: "Electronic Device 356",
    categoryId: "1001",
    description:
      "Description for electronic device 356 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-356.jpg",
  },
  {
    id: "357",
    ref: "456",
    name: "Electronic Device 357",
    categoryId: "1001",
    description:
      "Description for electronic device 357 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-357.jpg",
  },
  {
    id: "358",
    ref: "457",
    name: "Electronic Device 358",
    categoryId: "1001",
    description:
      "Description for electronic device 358 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-358.jpg",
  },
  {
    id: "359",
    ref: "458",
    name: "Electronic Device 359",
    categoryId: "1001",
    description:
      "Description for electronic device 359 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-359.jpg",
  },
  {
    id: "360",
    ref: "459",
    name: "Electronic Device 360",
    categoryId: "1001",
    description:
      "Description for electronic device 360 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-360.jpg",
  },
  {
    id: "361",
    ref: "460",
    name: "Electronic Device 361",
    categoryId: "1001",
    description:
      "Description for electronic device 361 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-361.jpg",
  },
  {
    id: "362",
    ref: "461",
    name: "Electronic Device 362",
    categoryId: "1001",
    description:
      "Description for electronic device 362 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-362.jpg",
  },
  {
    id: "363",
    ref: "462",
    name: "Electronic Device 363",
    categoryId: "1001",
    description:
      "Description for electronic device 363 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-363.jpg",
  },
  {
    id: "364",
    ref: "463",
    name: "Electronic Device 364",
    categoryId: "1001",
    description:
      "Description for electronic device 364 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-364.jpg",
  },
  {
    id: "365",
    ref: "464",
    name: "Electronic Device 365",
    categoryId: "1001",
    description:
      "Description for electronic device 365 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-365.jpg",
  },
  {
    id: "366",
    ref: "465",
    name: "Electronic Device 366",
    categoryId: "1001",
    description:
      "Description for electronic device 366 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-366.jpg",
  },
  {
    id: "367",
    ref: "466",
    name: "Electronic Device 367",
    categoryId: "1001",
    description:
      "Description for electronic device 367 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-367.jpg",
  },
  {
    id: "368",
    ref: "467",
    name: "Electronic Device 368",
    categoryId: "1001",
    description:
      "Description for electronic device 368 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-368.jpg",
  },
  {
    id: "369",
    ref: "468",
    name: "Electronic Device 369",
    categoryId: "1001",
    description:
      "Description for electronic device 369 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-369.jpg",
  },
  {
    id: "370",
    ref: "469",
    name: "Electronic Device 370",
    categoryId: "1001",
    description:
      "Description for electronic device 370 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-370.jpg",
  },
  {
    id: "371",
    ref: "470",
    name: "Electronic Device 371",
    categoryId: "1001",
    description:
      "Description for electronic device 371 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-371.jpg",
  },
  {
    id: "372",
    ref: "471",
    name: "Electronic Device 372",
    categoryId: "1001",
    description:
      "Description for electronic device 372 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-372.jpg",
  },
  {
    id: "373",
    ref: "472",
    name: "Electronic Device 373",
    categoryId: "1001",
    description:
      "Description for electronic device 373 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-373.jpg",
  },
  {
    id: "374",
    ref: "473",
    name: "Electronic Device 374",
    categoryId: "1001",
    description:
      "Description for electronic device 374 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-374.jpg",
  },
  {
    id: "375",
    ref: "474",
    name: "Electronic Device 375",
    categoryId: "1001",
    description:
      "Description for electronic device 375 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-375.jpg",
  },
  {
    id: "376",
    ref: "475",
    name: "Electronic Device 376",
    categoryId: "1001",
    description:
      "Description for electronic device 376 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-376.jpg",
  },
  {
    id: "377",
    ref: "476",
    name: "Electronic Device 377",
    categoryId: "1001",
    description:
      "Description for electronic device 377 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-377.jpg",
  },
  {
    id: "378",
    ref: "477",
    name: "Electronic Device 378",
    categoryId: "1001",
    description:
      "Description for electronic device 378 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-378.jpg",
  },
  {
    id: "379",
    ref: "478",
    name: "Electronic Device 379",
    categoryId: "1001",
    description:
      "Description for electronic device 379 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-379.jpg",
  },
  {
    id: "380",
    ref: "479",
    name: "Electronic Device 380",
    categoryId: "1001",
    description:
      "Description for electronic device 380 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-380.jpg",
  },
  {
    id: "381",
    ref: "480",
    name: "Electronic Device 381",
    categoryId: "1001",
    description:
      "Description for electronic device 381 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-381.jpg",
  },
  {
    id: "382",
    ref: "481",
    name: "Electronic Device 382",
    categoryId: "1001",
    description:
      "Description for electronic device 382 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-382.jpg",
  },
  {
    id: "383",
    ref: "482",
    name: "Electronic Device 383",
    categoryId: "1001",
    description:
      "Description for electronic device 383 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-383.jpg",
  },
  {
    id: "384",
    ref: "483",
    name: "Electronic Device 384",
    categoryId: "1001",
    description:
      "Description for electronic device 384 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-384.jpg",
  },
  {
    id: "385",
    ref: "484",
    name: "Electronic Device 385",
    categoryId: "1001",
    description:
      "Description for electronic device 385 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-385.jpg",
  },
  {
    id: "386",
    ref: "485",
    name: "Electronic Device 386",
    categoryId: "1001",
    description:
      "Description for electronic device 386 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-386.jpg",
  },
  {
    id: "387",
    ref: "486",
    name: "Electronic Device 387",
    categoryId: "1001",
    description:
      "Description for electronic device 387 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-387.jpg",
  },
  {
    id: "388",
    ref: "487",
    name: "Electronic Device 388",
    categoryId: "1001",
    description:
      "Description for electronic device 388 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-388.jpg",
  },
  {
    id: "389",
    ref: "488",
    name: "Electronic Device 389",
    categoryId: "1001",
    description:
      "Description for electronic device 389 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-389.jpg",
  },
  {
    id: "390",
    ref: "489",
    name: "Electronic Device 390",
    categoryId: "1001",
    description:
      "Description for electronic device 390 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-390.jpg",
  },
  {
    id: "391",
    ref: "490",
    name: "Electronic Device 391",
    categoryId: "1001",
    description:
      "Description for electronic device 391 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-391.jpg",
  },
  {
    id: "392",
    ref: "491",
    name: "Electronic Device 392",
    categoryId: "1001",
    description:
      "Description for electronic device 392 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-392.jpg",
  },
  {
    id: "393",
    ref: "492",
    name: "Electronic Device 393",
    categoryId: "1001",
    description:
      "Description for electronic device 393 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-393.jpg",
  },
  {
    id: "394",
    ref: "493",
    name: "Electronic Device 394",
    categoryId: "1001",
    description:
      "Description for electronic device 394 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-394.jpg",
  },
  {
    id: "395",
    ref: "494",
    name: "Electronic Device 395",
    categoryId: "1001",
    description:
      "Description for electronic device 395 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-395.jpg",
  },
  {
    id: "396",
    ref: "495",
    name: "Electronic Device 396",
    categoryId: "1001",
    description:
      "Description for electronic device 396 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-396.jpg",
  },
  {
    id: "397",
    ref: "496",
    name: "Electronic Device 397",
    categoryId: "1001",
    description:
      "Description for electronic device 397 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-397.jpg",
  },
  {
    id: "398",
    ref: "497",
    name: "Electronic Device 398",
    categoryId: "1001",
    description:
      "Description for electronic device 398 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-398.jpg",
  },
  {
    id: "399",
    ref: "498",
    name: "Electronic Device 399",
    categoryId: "1001",
    description:
      "Description for electronic device 399 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-399.jpg",
  },
  {
    id: "400",
    ref: "499",
    name: "Electronic Device 400",
    categoryId: "1001",
    description:
      "Description for electronic device 400 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-400.jpg",
  },
  {
    id: "401",
    ref: "500",
    name: "Electronic Device 401",
    categoryId: "1001",
    description:
      "Description for electronic device 401 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-401.jpg",
  },
  {
    id: "402",
    ref: "501",
    name: "Electronic Device 402",
    categoryId: "1001",
    description:
      "Description for electronic device 402 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-402.jpg",
  },
  {
    id: "403",
    ref: "502",
    name: "Electronic Device 403",
    categoryId: "1001",
    description:
      "Description for electronic device 403 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-403.jpg",
  },
  {
    id: "404",
    ref: "503",
    name: "Electronic Device 404",
    categoryId: "1001",
    description:
      "Description for electronic device 404 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-404.jpg",
  },
  {
    id: "405",
    ref: "504",
    name: "Electronic Device 405",
    categoryId: "1001",
    description:
      "Description for electronic device 405 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-405.jpg",
  },
  {
    id: "406",
    ref: "505",
    name: "Electronic Device 406",
    categoryId: "1001",
    description:
      "Description for electronic device 406 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-406.jpg",
  },
  {
    id: "407",
    ref: "506",
    name: "Electronic Device 407",
    categoryId: "1001",
    description:
      "Description for electronic device 407 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-407.jpg",
  },
  {
    id: "408",
    ref: "507",
    name: "Electronic Device 408",
    categoryId: "1001",
    description:
      "Description for electronic device 408 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-408.jpg",
  },
  {
    id: "409",
    ref: "508",
    name: "Electronic Device 409",
    categoryId: "1001",
    description:
      "Description for electronic device 409 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-409.jpg",
  },
  {
    id: "410",
    ref: "509",
    name: "Electronic Device 410",
    categoryId: "1001",
    description:
      "Description for electronic device 410 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-410.jpg",
  },
  {
    id: "411",
    ref: "510",
    name: "Electronic Device 411",
    categoryId: "1001",
    description:
      "Description for electronic device 411 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-411.jpg",
  },
  {
    id: "412",
    ref: "511",
    name: "Electronic Device 412",
    categoryId: "1001",
    description:
      "Description for electronic device 412 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-412.jpg",
  },
  {
    id: "413",
    ref: "512",
    name: "Electronic Device 413",
    categoryId: "1001",
    description:
      "Description for electronic device 413 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-413.jpg",
  },
  {
    id: "414",
    ref: "513",
    name: "Electronic Device 414",
    categoryId: "1001",
    description:
      "Description for electronic device 414 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-414.jpg",
  },
  {
    id: "415",
    ref: "514",
    name: "Electronic Device 415",
    categoryId: "1001",
    description:
      "Description for electronic device 415 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-415.jpg",
  },
  {
    id: "416",
    ref: "515",
    name: "Electronic Device 416",
    categoryId: "1001",
    description:
      "Description for electronic device 416 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-416.jpg",
  },
  {
    id: "417",
    ref: "516",
    name: "Electronic Device 417",
    categoryId: "1001",
    description:
      "Description for electronic device 417 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-417.jpg",
  },
  {
    id: "418",
    ref: "517",
    name: "Electronic Device 418",
    categoryId: "1001",
    description:
      "Description for electronic device 418 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-418.jpg",
  },
  {
    id: "419",
    ref: "518",
    name: "Electronic Device 419",
    categoryId: "1001",
    description:
      "Description for electronic device 419 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-419.jpg",
  },
  {
    id: "420",
    ref: "519",
    name: "Electronic Device 420",
    categoryId: "1001",
    description:
      "Description for electronic device 420 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-420.jpg",
  },
  {
    id: "421",
    ref: "520",
    name: "Electronic Device 421",
    categoryId: "1001",
    description:
      "Description for electronic device 421 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-421.jpg",
  },
  {
    id: "422",
    ref: "521",
    name: "Electronic Device 422",
    categoryId: "1001",
    description:
      "Description for electronic device 422 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-422.jpg",
  },
  {
    id: "423",
    ref: "522",
    name: "Electronic Device 423",
    categoryId: "1001",
    description:
      "Description for electronic device 423 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-423.jpg",
  },
  {
    id: "424",
    ref: "523",
    name: "Electronic Device 424",
    categoryId: "1001",
    description:
      "Description for electronic device 424 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-424.jpg",
  },
  {
    id: "425",
    ref: "524",
    name: "Electronic Device 425",
    categoryId: "1001",
    description:
      "Description for electronic device 425 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-425.jpg",
  },
  {
    id: "426",
    ref: "525",
    name: "Electronic Device 426",
    categoryId: "1001",
    description:
      "Description for electronic device 426 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-426.jpg",
  },
  {
    id: "427",
    ref: "526",
    name: "Electronic Device 427",
    categoryId: "1001",
    description:
      "Description for electronic device 427 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-427.jpg",
  },
  {
    id: "428",
    ref: "527",
    name: "Electronic Device 428",
    categoryId: "1001",
    description:
      "Description for electronic device 428 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-428.jpg",
  },
  {
    id: "429",
    ref: "528",
    name: "Electronic Device 429",
    categoryId: "1001",
    description:
      "Description for electronic device 429 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-429.jpg",
  },
  {
    id: "430",
    ref: "529",
    name: "Electronic Device 430",
    categoryId: "1001",
    description:
      "Description for electronic device 430 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-430.jpg",
  },
  {
    id: "431",
    ref: "530",
    name: "Electronic Device 431",
    categoryId: "1001",
    description:
      "Description for electronic device 431 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-431.jpg",
  },
  {
    id: "432",
    ref: "531",
    name: "Electronic Device 432",
    categoryId: "1001",
    description:
      "Description for electronic device 432 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-432.jpg",
  },
  {
    id: "433",
    ref: "532",
    name: "Electronic Device 433",
    categoryId: "1001",
    description:
      "Description for electronic device 433 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-433.jpg",
  },
  {
    id: "434",
    ref: "533",
    name: "Electronic Device 434",
    categoryId: "1001",
    description:
      "Description for electronic device 434 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-434.jpg",
  },
  {
    id: "435",
    ref: "534",
    name: "Electronic Device 435",
    categoryId: "1001",
    description:
      "Description for electronic device 435 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-435.jpg",
  },
  {
    id: "436",
    ref: "535",
    name: "Electronic Device 436",
    categoryId: "1001",
    description:
      "Description for electronic device 436 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-436.jpg",
  },
  {
    id: "437",
    ref: "536",
    name: "Electronic Device 437",
    categoryId: "1001",
    description:
      "Description for electronic device 437 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-437.jpg",
  },
  {
    id: "438",
    ref: "537",
    name: "Electronic Device 438",
    categoryId: "1001",
    description:
      "Description for electronic device 438 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-438.jpg",
  },
  {
    id: "439",
    ref: "538",
    name: "Electronic Device 439",
    categoryId: "1001",
    description:
      "Description for electronic device 439 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-439.jpg",
  },
  {
    id: "440",
    ref: "539",
    name: "Electronic Device 440",
    categoryId: "1001",
    description:
      "Description for electronic device 440 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-440.jpg",
  },
  {
    id: "441",
    ref: "540",
    name: "Electronic Device 441",
    categoryId: "1001",
    description:
      "Description for electronic device 441 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-441.jpg",
  },
  {
    id: "442",
    ref: "541",
    name: "Electronic Device 442",
    categoryId: "1001",
    description:
      "Description for electronic device 442 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-442.jpg",
  },
  {
    id: "443",
    ref: "542",
    name: "Electronic Device 443",
    categoryId: "1001",
    description:
      "Description for electronic device 443 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-443.jpg",
  },
  {
    id: "444",
    ref: "543",
    name: "Electronic Device 444",
    categoryId: "1001",
    description:
      "Description for electronic device 444 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-444.jpg",
  },
  {
    id: "445",
    ref: "544",
    name: "Electronic Device 445",
    categoryId: "1001",
    description:
      "Description for electronic device 445 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-445.jpg",
  },
  {
    id: "446",
    ref: "545",
    name: "Electronic Device 446",
    categoryId: "1001",
    description:
      "Description for electronic device 446 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-446.jpg",
  },
  {
    id: "447",
    ref: "546",
    name: "Electronic Device 447",
    categoryId: "1001",
    description:
      "Description for electronic device 447 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-447.jpg",
  },
  {
    id: "448",
    ref: "547",
    name: "Electronic Device 448",
    categoryId: "1001",
    description:
      "Description for electronic device 448 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-448.jpg",
  },
  {
    id: "449",
    ref: "548",
    name: "Electronic Device 449",
    categoryId: "1001",
    description:
      "Description for electronic device 449 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-449.jpg",
  },
  {
    id: "450",
    ref: "549",
    name: "Electronic Device 450",
    categoryId: "1001",
    description:
      "Description for electronic device 450 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-450.jpg",
  },
  {
    id: "451",
    ref: "550",
    name: "Electronic Device 451",
    categoryId: "1001",
    description:
      "Description for electronic device 451 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-451.jpg",
  },
  {
    id: "452",
    ref: "551",
    name: "Electronic Device 452",
    categoryId: "1001",
    description:
      "Description for electronic device 452 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-452.jpg",
  },
  {
    id: "453",
    ref: "552",
    name: "Electronic Device 453",
    categoryId: "1001",
    description:
      "Description for electronic device 453 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-453.jpg",
  },
  {
    id: "454",
    ref: "553",
    name: "Electronic Device 454",
    categoryId: "1001",
    description:
      "Description for electronic device 454 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-454.jpg",
  },
  {
    id: "455",
    ref: "554",
    name: "Electronic Device 455",
    categoryId: "1001",
    description:
      "Description for electronic device 455 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-455.jpg",
  },
  {
    id: "456",
    ref: "555",
    name: "Electronic Device 456",
    categoryId: "1001",
    description:
      "Description for electronic device 456 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-456.jpg",
  },
  {
    id: "457",
    ref: "556",
    name: "Electronic Device 457",
    categoryId: "1001",
    description:
      "Description for electronic device 457 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-457.jpg",
  },
  {
    id: "458",
    ref: "557",
    name: "Electronic Device 458",
    categoryId: "1001",
    description:
      "Description for electronic device 458 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-458.jpg",
  },
  {
    id: "459",
    ref: "558",
    name: "Electronic Device 459",
    categoryId: "1001",
    description:
      "Description for electronic device 459 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-459.jpg",
  },
  {
    id: "460",
    ref: "559",
    name: "Electronic Device 460",
    categoryId: "1001",
    description:
      "Description for electronic device 460 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-460.jpg",
  },
  {
    id: "461",
    ref: "560",
    name: "Electronic Device 461",
    categoryId: "1001",
    description:
      "Description for electronic device 461 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-461.jpg",
  },
  {
    id: "462",
    ref: "561",
    name: "Electronic Device 462",
    categoryId: "1001",
    description:
      "Description for electronic device 462 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-462.jpg",
  },
  {
    id: "463",
    ref: "562",
    name: "Electronic Device 463",
    categoryId: "1001",
    description:
      "Description for electronic device 463 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-463.jpg",
  },
  {
    id: "464",
    ref: "563",
    name: "Electronic Device 464",
    categoryId: "1001",
    description:
      "Description for electronic device 464 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-464.jpg",
  },
  {
    id: "465",
    ref: "564",
    name: "Electronic Device 465",
    categoryId: "1001",
    description:
      "Description for electronic device 465 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-465.jpg",
  },
  {
    id: "466",
    ref: "565",
    name: "Electronic Device 466",
    categoryId: "1001",
    description:
      "Description for electronic device 466 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-466.jpg",
  },
  {
    id: "467",
    ref: "566",
    name: "Electronic Device 467",
    categoryId: "1001",
    description:
      "Description for electronic device 467 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-467.jpg",
  },
  {
    id: "468",
    ref: "567",
    name: "Electronic Device 468",
    categoryId: "1001",
    description:
      "Description for electronic device 468 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-468.jpg",
  },
  {
    id: "469",
    ref: "568",
    name: "Electronic Device 469",
    categoryId: "1001",
    description:
      "Description for electronic device 469 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-469.jpg",
  },
  {
    id: "470",
    ref: "569",
    name: "Electronic Device 470",
    categoryId: "1001",
    description:
      "Description for electronic device 470 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-470.jpg",
  },
  {
    id: "471",
    ref: "570",
    name: "Electronic Device 471",
    categoryId: "1001",
    description:
      "Description for electronic device 471 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-471.jpg",
  },
  {
    id: "472",
    ref: "571",
    name: "Electronic Device 472",
    categoryId: "1001",
    description:
      "Description for electronic device 472 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-472.jpg",
  },
  {
    id: "473",
    ref: "572",
    name: "Electronic Device 473",
    categoryId: "1001",
    description:
      "Description for electronic device 473 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-473.jpg",
  },
  {
    id: "474",
    ref: "573",
    name: "Electronic Device 474",
    categoryId: "1001",
    description:
      "Description for electronic device 474 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-474.jpg",
  },
  {
    id: "475",
    ref: "574",
    name: "Electronic Device 475",
    categoryId: "1001",
    description:
      "Description for electronic device 475 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-475.jpg",
  },
  {
    id: "476",
    ref: "575",
    name: "Electronic Device 476",
    categoryId: "1001",
    description:
      "Description for electronic device 476 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-476.jpg",
  },
  {
    id: "477",
    ref: "576",
    name: "Electronic Device 477",
    categoryId: "1001",
    description:
      "Description for electronic device 477 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-477.jpg",
  },
  {
    id: "478",
    ref: "577",
    name: "Electronic Device 478",
    categoryId: "1001",
    description:
      "Description for electronic device 478 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-478.jpg",
  },
  {
    id: "479",
    ref: "578",
    name: "Electronic Device 479",
    categoryId: "1001",
    description:
      "Description for electronic device 479 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-479.jpg",
  },
  {
    id: "480",
    ref: "579",
    name: "Electronic Device 480",
    categoryId: "1001",
    description:
      "Description for electronic device 480 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-480.jpg",
  },
  {
    id: "481",
    ref: "580",
    name: "Electronic Device 481",
    categoryId: "1001",
    description:
      "Description for electronic device 481 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-481.jpg",
  },
  {
    id: "482",
    ref: "581",
    name: "Electronic Device 482",
    categoryId: "1001",
    description:
      "Description for electronic device 482 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-482.jpg",
  },
  {
    id: "483",
    ref: "582",
    name: "Electronic Device 483",
    categoryId: "1001",
    description:
      "Description for electronic device 483 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-483.jpg",
  },
  {
    id: "484",
    ref: "583",
    name: "Electronic Device 484",
    categoryId: "1001",
    description:
      "Description for electronic device 484 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-484.jpg",
  },
  {
    id: "485",
    ref: "584",
    name: "Electronic Device 485",
    categoryId: "1001",
    description:
      "Description for electronic device 485 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-485.jpg",
  },
  {
    id: "486",
    ref: "585",
    name: "Electronic Device 486",
    categoryId: "1001",
    description:
      "Description for electronic device 486 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-486.jpg",
  },
  {
    id: "487",
    ref: "586",
    name: "Electronic Device 487",
    categoryId: "1001",
    description:
      "Description for electronic device 487 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-487.jpg",
  },
  {
    id: "488",
    ref: "587",
    name: "Electronic Device 488",
    categoryId: "1001",
    description:
      "Description for electronic device 488 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-488.jpg",
  },
  {
    id: "489",
    ref: "588",
    name: "Electronic Device 489",
    categoryId: "1001",
    description:
      "Description for electronic device 489 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-489.jpg",
  },
  {
    id: "490",
    ref: "589",
    name: "Electronic Device 490",
    categoryId: "1001",
    description:
      "Description for electronic device 490 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-490.jpg",
  },
  {
    id: "491",
    ref: "590",
    name: "Electronic Device 491",
    categoryId: "1001",
    description:
      "Description for electronic device 491 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-491.jpg",
  },
  {
    id: "492",
    ref: "591",
    name: "Electronic Device 492",
    categoryId: "1001",
    description:
      "Description for electronic device 492 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-492.jpg",
  },
  {
    id: "493",
    ref: "592",
    name: "Electronic Device 493",
    categoryId: "1001",
    description:
      "Description for electronic device 493 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-493.jpg",
  },
  {
    id: "494",
    ref: "593",
    name: "Electronic Device 494",
    categoryId: "1001",
    description:
      "Description for electronic device 494 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-494.jpg",
  },
  {
    id: "495",
    ref: "594",
    name: "Electronic Device 495",
    categoryId: "1001",
    description:
      "Description for electronic device 495 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-495.jpg",
  },
  {
    id: "496",
    ref: "595",
    name: "Electronic Device 496",
    categoryId: "1001",
    description:
      "Description for electronic device 496 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-496.jpg",
  },
  {
    id: "497",
    ref: "596",
    name: "Electronic Device 497",
    categoryId: "1001",
    description:
      "Description for electronic device 497 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-497.jpg",
  },
  {
    id: "498",
    ref: "597",
    name: "Electronic Device 498",
    categoryId: "1001",
    description:
      "Description for electronic device 498 with advanced features.",
    imageUrlPath: "/images/products/electronic-device-498.jpg",
  },
];
