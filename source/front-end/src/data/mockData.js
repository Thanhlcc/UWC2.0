import { tokens } from "../theme";

export const mockDataTeam = [
  {
    id: 1,
    name: "Nguyen Van A",
    email: "nguyenvana@gmail.com",
    age: 35,
    type:"Janitor",
    status: "Free",
  },
  {
    id: 2,
    name: "Nguyen Van B",
    email: "b@gmail.com",
    age: 42,
    type: "Janitor",
    status: "Busy",
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    age: 45,
    type: "Collector",
    status: "Free",
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    age: 16,
    type: "Collector",
    status: "Free",
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    age: 31,
    type: "Janitor",
    status: "Busy",
  },
  {
    id: 6,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    age: 31,
    type: "Collector",
    status: "Busy",
  }
];


export const mockDataMCP = [
  {
    id: "MCP1",
    type: "Small",
    location: "123 Nguyen Van Linh",
    status: "Free"
  },
  {
    id: "MCP2",
    type: "Large",
    location: "456 Cach Mang Thang 8",
    status: "Busy"
  },
  {
    id: "MCP3",
    type: "Medium",
    location: "12 Nguyen Van Dau",
    status: "Free"
  },
  {
    id: "MCP4",
    type: "Large",
    location: "10 Le Van Duyet",
    status: "Busy"
  },
  {
    id: "MCP5",
    type: "Medium",
    location: "10 Ham Nghi",
    status: "Free"
  },
]

export const mockBarData = [
  {
    country: "AD",
    "hot dog": 137,
    "hot dogColor": "hsl(229, 70%, 50%)",
    burger: 96,
    burgerColor: "hsl(296, 70%, 50%)",
    kebab: 72,
    kebabColor: "hsl(97, 70%, 50%)",
    donut: 140,
    donutColor: "hsl(340, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 55,
    "hot dogColor": "hsl(307, 70%, 50%)",
    burger: 28,
    burgerColor: "hsl(111, 70%, 50%)",
    kebab: 58,
    kebabColor: "hsl(273, 70%, 50%)",
    donut: 29,
    donutColor: "hsl(275, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 109,
    "hot dogColor": "hsl(72, 70%, 50%)",
    burger: 23,
    burgerColor: "hsl(96, 70%, 50%)",
    kebab: 34,
    kebabColor: "hsl(106, 70%, 50%)",
    donut: 152,
    donutColor: "hsl(256, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 133,
    "hot dogColor": "hsl(257, 70%, 50%)",
    burger: 52,
    burgerColor: "hsl(326, 70%, 50%)",
    kebab: 43,
    kebabColor: "hsl(110, 70%, 50%)",
    donut: 83,
    donutColor: "hsl(9, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 81,
    "hot dogColor": "hsl(190, 70%, 50%)",
    burger: 80,
    burgerColor: "hsl(325, 70%, 50%)",
    kebab: 112,
    kebabColor: "hsl(54, 70%, 50%)",
    donut: 35,
    donutColor: "hsl(285, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 66,
    "hot dogColor": "hsl(208, 70%, 50%)",
    burger: 111,
    burgerColor: "hsl(334, 70%, 50%)",
    kebab: 167,
    kebabColor: "hsl(182, 70%, 50%)",
    donut: 18,
    donutColor: "hsl(76, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 80,
    "hot dogColor": "hsl(87, 70%, 50%)",
    burger: 47,
    burgerColor: "hsl(141, 70%, 50%)",
    kebab: 158,
    kebabColor: "hsl(224, 70%, 50%)",
    donut: 49,
    donutColor: "hsl(274, 70%, 50%)",
  },
];

export const mockPieData = [
  {
    id: "late",
    label: "late",
    value: 140,
    color: "hsl(162, 70%, 50%)",
  },
  {
    id: "done",
    label: "done",
    value: 305,
    color: "hsl(291, 70%, 50%)",
  },
  {
    id: "Processing",
    label: "Processing",
    value: 550,
    color: "hsl(229, 70%, 50%)",
  }
];

export const mockVehicledata = [
  {
    id: "Busy",
    label: "Busy",
    value: 400,
    color: "hsl(40, 70%, 50%)",
  },
  {
    id: "Free",
    label: "Free",
    value: 240,
    color: "hsl(100, 70%, 50%)",
  },
  {
    id: "Broken",
    label: "Broken",
    value: 100,
    color: "hsl(229, 70%, 50%)",
  }
]

export const mockMCPdata = [
  {
    id: "Full",
    label: "Full",
    value: 140,
    color: "hsl(40, 70%, 50%)",
  },
  {
    id: "Filled",
    label: "Filled",
    value: 305,
    color: "hsl(100, 70%, 50%)",
  },
  {
    id: "Empty",
    label: "Empty",
    value: 550,
    color: "hsl(229, 70%, 50%)",
  }
];

export const mockLineData = [
  {
    id: "Collector",
    color: tokens("dark").greenAccent[500],
    data: [
      {
        x: "Jan",
        y: 101,
      },
      {
        x: "Feb",
        y: 75,
      },
      {
        x: "Mar",
        y: 36,
      },
      {
        x: "Apr",
        y: 216,
      },
      {
        x: "May",
        y: 35,
      },
      {
        x: "Jun",
        y: 236,
      },
      {
        x: "Jul",
        y: 88,
      },
      {
        x: "Aug",
        y: 232,
      },
      {
        x: "Sep",
        y: 281,
      },
      {
        x: "Oct",
        y: 100,
      },
      {
        x: "Nov",
        y: 35,
      },
      {
        x: "Dec",
        y: 140,
      },
    ],
  },
  {
    id: "Janitor",
    color: tokens("dark").blueAccent[300],
    data: [
      {
        x: "Jan",
        y: 150,
      },
      {
        x: "Feb",
        y: 205,
      },
      {
        x: "Mar",
        y: 98,
      },
      {
        x: "Apr",
        y: 56,
      },
      {
        x: "May",
        y: 187,
      },
      {
        x: "Jun",
        y: 210,
      },
      {
        x: "Jul",
        y: 70,
      },
      {
        x: "Aug",
        y: 200,
      },
      {
        x: "Sep",
        y: 258,
      },
      {
        x: "Oct",
        y: 130,
      },
      {
        x: "Nov",
        y: 69,
      },
      {
        x: "Dec",
        y: 134,
      },
    ],
  },
];

export const mockDataVehicle = [
  {
    id: 15,
    driver: "Nguyen Van A",
    location: "District 10",
    type:"Truck",
    status: "Broken",
  },
  {
    id: 2,
    driver: "Nguyen Van B",
    location: "District 8",
    type:"Truck",
    status: "Busy",
  },
  {
    id: 5,
    driver: "Nguyen Van C",
    location: "District 1",
    type:"Trolley",
    status: "Free",
  },
  {
    id: 7,
    driver: "Nguyen Van D",
    location: "District 6",
    type:"Truck",
    status: "Free",
  },
  {
    id: 10,
    driver: "Nguyen Van E",
    location: "District 10",
    type:"Trolley",
    status: "Broken",
  },
  {
    id: 11,
    driver: "Nguyen Van F",
    location: "District 3",
    type:"Truck",
    status: "Busy",
  },
];
