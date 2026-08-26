export type BlogBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ol"; items: string[] }
  | { type: "ul"; items: string[] };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  tags: string[];
  content: BlogBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "far-calculation-rajuk-dhaka-new-dap",
    title: "FAR Calculation of RAJUK Dhaka-New DAP Gazette on 14 December'2025",
    excerpt:
      "A complete walkthrough of Floor Area Ratio under the new DAP-2035 — Plot FAR, Area FAR, Bonus/Incentive FAR, and two worked calculation examples.",
    category: "Regulations",
    date: "14 December 2025",
    readTime: "9 min read",
    author: "PDC Engineers & Associates",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600&q=80",
    tags: [
      "#FAR",
      "#architecture",
      "#DAP",
      "#bidhimala2025",
      "#Dhaka",
      "#BNBC2020",
      "#architects",
      "#anowarchowdhury",
    ],
    content: [
      { type: "h2", text: "What is Floor Area Ratio(FAR)?" },
      {
        type: "p",
        text: "FAR Calculation of RAJUK Dhaka per the new DAP-2035. The term FAR refers to the “Floor Area Ratio”. Sometimes this term seems complicated to the landowners. We are SHELLMARK LIMITED is here to make it as simple as possible. It can be calculated using two areas of a project.",
      },
      {
        type: "ol",
        items: [
          "The total area of land in Square Feet. Say the land is 5 Katha. So, the total area of land is 5×720=3600 square feet",
          "The Total Area of Building in square feet. Say, the total cumulative floor area of the building is 14400 square feet.",
        ],
      },
      { type: "p", text: "Once the above two terms are calculated." },
      { type: "p", text: "The FAR Calculation becomes very easy using the below formula:" },
      { type: "p", text: "FAR=Cumulative Floor Area of the Building/Total Land Area" },
      { type: "p", text: "Using the data of the above two, FAR=14400/3600=4.0" },
      {
        type: "p",
        text: "Generally, the Detailed Area Plan (DAP) of Dhaka City has a chart of these FAR values. You have to calculate the total cumulative floor area using the table. Hence, you can calculate the area of each floor, maximum ground coverage, and number of story heights. Still, seems complicated to you? Don’t worry, we will explain it as much as possible. Also, give a detailed calculation example to make it clearer.",
      },
      {
        type: "h2",
        text: "Types of FAR in New DAP-2025: FAR Calculation of RAJUK Dhaka",
      },
      { type: "p", text: "There are basically 2 Types of FAR in New DAP-2025." },
      { type: "ol", items: ["Plot FAR", "Area FAR"] },
      { type: "p", text: "There is a special type of Bonus FAR called Incentive FAR" },
      { type: "p", text: "These types of FAR are described below:" },
      { type: "h3", text: "1. Plot FAR" },
      {
        type: "p",
        text: "You can calculate the Plot FAR according to the Apendix-3.5, Page-462, Volume-1 of New DAP. The Plot FAR depends on the connecting road width. The wider the road, more the plot FAR. As per new DAP, minimum road with for permissible plot FAR is 6 feet. Plot FAR=1.5 for A3 type building beside 6 feet wide road. Hence, Plot FAR=4.5 for A3 Type building beside 80 feet wide road. The above calculation is for land under central Dhaka.",
      },
      { type: "p", text: "There are 15 major segments on plot FAR Calculation:" },
      {
        type: "ol",
        items: [
          "A: Residential Building (Central Dhaka)",
          "A: Residential Building (Outside Central Dhaka)",
          "A: Residential Building (Other City Area)",
          "B: Educational Institution",
          "C: Institutional Building",
          "D: Healthcare Building",
          "E: Business Centre",
          "F: Mercantile",
          "G: Industrial Building",
          "H: Storage Building",
          "I: Assembly Building",
          "J: Hazardous Building",
          "K: Others Building",
          "L: Utility Building",
          "M: Miscellaneous Use",
        ],
      },
      { type: "p", text: "There are another 6 Sub-categories based on dwelling size:" },
      {
        type: "ol",
        items: [
          "Single Family Residence (Type-A1)",
          "Two Family Residence (Type-A2)",
          "Flat or Apartment Building (Type-A3)",
          "Mess, Boarding, Dormitory and Hostel (Type-A4)",
          "Hotel, Motel, Guest House & Service Apartment (Type-A5)",
          "Low-Cost Housing (Type-A6)",
        ],
      },
      {
        type: "p",
        text: "Plot FAR Table: Appendix-3.5, DAP Latest Update on 14 December'2025",
      },
      { type: "p", text: "Plot FAR Table" },
      { type: "p", text: "Click Here to See Plot FAR Table for All Occupancies" },
      { type: "h3", text: "2. Area FAR" },
      {
        type: "p",
        text: "According to New DAP: 2025, several administrative areas exist. The area is divided based on the City Corporation Ward Number. FAR values are changed according to Ward number. There are also classifications based on planning areas and unplanned areas. Government housing areas, RAJUK plot areas, and RAJUK-approved private housing are called planned areas.  Individual lands are termed unplanned land or spontaneous areas. You will find the following information from the Area FAR Table:",
      },
      {
        type: "ol",
        items: [
          "Maximum Permissible Area FAR Values",
          "Desirable Density (Number of Flats per Katha of Land)",
          "Functional Net Habitable Area (Maximum Ground Coverage-MGC)",
          "Density Block (The administrative location of your plot.)",
          "Total administrative area name under that Ward Number.",
          "Gross to Net Ratio of that area.",
        ],
      },
      {
        type: "p",
        text: "Area FAR Table: Appendix-3.6, DAP Latest Update on 14 December'2025",
      },
      { type: "p", text: "Area FAR Table" },
      { type: "h3", text: "3. Bonus FAR or Incentive FAR" },
      {
        type: "p",
        text: "Bonus FAR or Incentive FAR is a special type of FAR in New DAP. There are several criteria to achieve Bonus FAR. There is also a term “Base FAR”. The smallest value of Plot FAR and Area FAR is considered as Base FAR. So, Total FAR= Base FAR+ Bonus FAR. But total FAR never be more than Maximum FAR.  The following Bonus FAR can be achieved with specific conditions listed below:",
      },
      {
        type: "ol",
        items: [
          "Plot Unification/Unit Plot Area=0.2 to 0.75 (Based on Plot Size)",
          "Green Building=0.50 (Required Green Building Certification)",
          "Public Place or Open Space for Civic Facilities (New)=0.50",
          "Low-Cost Abashon(A6) with 5 Residential Units=0.50(>10 Katha) to 0.75(>20 Katha)",
          "Transit Oriented Development (TOD)=0.5",
          "Existing Road>30 foot=0.02 for every foot up to maximum 1.0",
        ],
      },
      {
        type: "h2",
        text: "FAR Calculation of RAJUK Dhaka: Step by Step Calculation process",
      },
      { type: "h3", text: "Example-01: 5 Katha, 75 Foot Road, Purbachal New Town" },
      {
        type: "ul",
        items: [
          "Land Location= Purbachal New Town, Road-105, Sector-25",
          "Building Type= Residential (A3 Apartment)",
          "Land Size=5 Katha",
          "Adjacent Road Width=75 Feet",
          "Density Block=54 (DAP updated 14 Dec’2025)",
          "Land Area in Square Feet=5*720=3600 SFT",
          "Plot FAR According to Sarani-3.5=4.65 for 75 foot road",
          "Area FAR According to Sarani-3.6=4.5",
          "Base FAR =4.5 (Minimum of Plot FAR & Area FAR as per latest DAP)",
          "Bonus FAR as per DAP Revised on 14 December-2025=0.2",
          "Bonus FAR for TOD=0 (>500mm from TOD Station)",
          "Total Usable FAR=4.5+0.2=4.70>Maximum FAR=4.65",
          "Hence Total Usable FAR=4.65",
          "Number of Base Dwelling Unit/Katha=1.9",
          "Total DU as per DAP Sarani 3.6=1.9*5=9.5 Nos",
          "Extra 10% DU(14 Dec’2025)=0.95",
          "Total usable DU=9.5+0.95=10.45 Nos, Say=11 Nos",
          "Cumulative Floor Area According to FAR=4.65*3600=16776 Sft",
          "Ground Floor Lift, Lobby Stair=300 Sft",
          "Net Usable Floor Area 1st Floor to above=16776-300=16476Sft",
          "For G+9 Storied Building= 16476/9=1830.66 Sft",
          "Extra Balconies=45.76 Sft/Floor(30% of Front or 2.5% of Floor Space)",
          "Extra Planter Box (2.5% Green Space)=45.76 Sft/Floor",
          "Floor Area=1830.66+45.76+45.76=1922.18 Sft",
          "Total Slab Area/Floor for 10 Storied Building=1922.18 Sft/Floor",
        ],
      },
      { type: "h3", text: "Example-02: 4 Katha, 25 Foot Road, Bashundhara R/A" },
      {
        type: "ul",
        items: [
          "Land Location= Road-01, Block-M, Bashundhara R/A",
          "Building Type= Residential (A3 Apartment)",
          "Land Size=4 Katha",
          "Adjacent Road Width=25 Feet",
          "Density Block=03 (DAP updated 14 Dec’2025)",
          "Land Area in Square Feet=4*720=2880 SFT",
          "Plot FAR According to Sarani-3.5=3.38 for 25 foot road",
          "Area FAR According to Sarani-3.6=4.1",
          "Base FAR =3.38 (Minimum of Plot FAR & Area FAR as per latest DAP)",
          "Incentive FAR for 4 Katha Plot=0.2",
          "Bonus FAR for TOD=0.5 (<200mm from TOD Station)",
          "Total Usable FAR=3.38+0.2+0.5=4.08<Maximum FAR=4.10",
          "Hence Total Usable FAR=4.08",
          "Number of Base Dwelling Unit/Katha=2.0",
          "Total DU as per DAP Sarani 3.6=2.0*4=8.0 Nos",
          "Extra 10% DU(14 Dec’2025)=0.8",
          "Total usable DU=8.0+0.8=8.8 Nos, Say=9 Nos",
          "Cumulative Floor Area According to FAR=4.08*2880=11750.40 Sft",
          "Ground Floor Lift, Lobby Stair=275 Sft",
          "Net Usable Floor Area 1st Floor to above=11750.40-275=11475.40 Sft",
          "For G+9 Storied Building= 11475.40/9=1275 Sft",
          "Extra Balconies=32 Sft/Floor(30% of Front or 2.5% of Floor Space)",
          "Extra Planter Box (2.5% Green Space)=32 Sft/Floor",
          "Floor Area=1275+32+32=1339 Sft",
          "Total Slab Area/Floor for 10 Storied Building=1339 Sft/Floor",
        ],
      },
    ],
  },
];
