export const BUTTONS_COL1: string[] = [
  "รับเวชภัณฑ์",
  "เบิกเวชภัณฑ์",
  "ใบคมคลัง",
  "ข้อมูลล็อต",
];

export const BUTTONS_COL2: string[] = [
  "เอกสาร/แก้ไข",
  "เบิกด้วยBarcode",
  "รหัสBarcode",
  "ยาที่ต้องจัดซื้อ",
];

export const BUTTONS_COL3: string[] = [
  "รายงาน",
  "ประมวลผล",
  "ข้อมูลพื้นฐาน",
  "ใบเบิก Online",
];

export const BUTTONS_COL4: string[] = [
  "สำรองข้อมูล",
  "ข้อมูลยานวัตกรรม",
  "แก้ไขรายการรับของ",
  "จบการทำงาน",
];

export const TOP_FORM_FIELDS = [
  { label: "เลขที่รับ", required: true },
  { label: "วันที่รับของ", required: true, defaultValue: "21 ตุลาคม 2568" },
  { label: "เลขที่ใบส่งของ", required: true },
  { label: "เลขที่ใบสั่ง", required: true },
  { label: "วันที่สั่งของ" },
  { label: "เลขที่อนุมัติ" },
  { label: "วันที่อนุมัติ" },
  { label: "ประเภทการรับของ", required: true, type: "select", options: ["รับจากการซื้อ"], fullWidth: true },
  { label: "งบประมาณ", type: "select", options: [""] },
  { label: "วิธีซื้อ", required: true, type: "select", options: [""] },
  { label: "เลขที่โครงการ", required: true, isHighlighted: true },
  { label: "หมายเหตุการรับของ", fullWidth: true },
  { label: "บริษัท", required: true, type: "select", options: [""] },
  { label: "รวม", type: "select", options: [""] },
  { label: "" },
  { label: "" },
];

export const TABLE_HEADERS = [
  "รหัสเวชภัณฑ์",
  "ชื่อเวชภัณฑ์",
  "รูปแบบ",
  "ส่วนประกอบ",
  "จำนวน",
  "หน่วยนับ",
  "ราคา",
  "มูลค่า",
  "วันหมดอายุ",
  "LotNo.",
  "TPU",
  "รหัสBarCode",
  "เลขทะเบียน",
  "ชื่อรพ.",
  "Base_Unit",
];
