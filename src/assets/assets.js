import consult from "../assets/consult.png";
import appointment from "../assets/appointment.png";
import emergency from "../assets/emergency.png";
import available from "../assets/available.png";
import kamau from "../assets/kamau.png";
import esther from "../assets/esther.png";
import davis from "../assets/davis.png";
import aisha from "../assets/aisha.png";
import muthoni from "../assets/muthoni.png";
import moraa from "../assets/moraa.png";
import mwangi from "../assets/mwangi.png";
import kigo from "../assets/kigo.png";
import makasi from "../assets/makasi.png";
import wambui from "../assets/wambui.png";
import atioeno from "../assets/atioeno.png";
import nairobihospital from "../assets/nairobihospital.png";
import dental from "../assets/dental.png";
import wellness from "../assets/wellness.png";
import peds from "../assets/peds.png";
import oncology from "../assets/oncology.png";
import orthoped from "../assets/orthoped.png";
import dermal from "../assets/dermal.png";
import cardio from "../assets/cardio.png";
import pharmacy from "../assets/pharmacy.png";
import rehab from "../assets/rehab.png";
import genphy from "../assets/genphy.png";
import gyn from "../assets/gyn.png";
import pedst from "../assets/pedst.png";
import nutri from "../assets/nutri.png";
import pharm from "../assets/pharm.png";
import hero from "../assets/hero.png";
export const servicesData = [
  {
    image: consult,
    service: "consult a doctor",
    serviceP: "Talk to any of our doctors any at and get help",
  },
  {
    image: appointment,
    service: "Book an appointment",
    serviceP: "Book an appointment and talk to our doctors to get medical help",
  },
  {
    image: emergency,
    service: "Emergency Services",
    serviceP: "Need medical help now? Our emergency  services are here for you",
  },
  {
    image:  available,
    service: "24/7 support",
    serviceP:
      "Facing an issue? Our dedicated 24/7 support team is always here to help.",
  },
];


export const doctors = [
  {
    id: "doc1",
    name: "Dr Kamau",
    image: kamau,
    Speciality: "Pedetrician",
    degree: "MBCHB,MMPD",
    experience: "3 years",
    about:
      "Dr Kamau has a strong commitment to deliver quality and comprehesive care to children",
    fees: 2000,
    address: {
      phoneNumber: +254789678234,
      Email: "kamauped@gmail.com",
    },
  },
  {
    id: "doc2",
    name: "Dr Esther",
    image: hero,
    Speciality: "Pedetrician",
    degree: "MBCHB,MMPD",
    experience: "3 years",
    about:
      "Dr Esther has a strong commitment to deliver quality and comprehesive care to children",
    fees: 2000,
    address: {
      phoneNumber: +254789678234,
      Email: "estherped@gmail.com",
    },
  },
  {
    id: "doc3",
    name: "Dr Davis",
    image: davis,
    Speciality: "General physian",
    degree: "MBCHB",
    experience: "2 years",
    about:
      "Dr Davis has a strong commitment to deliver quality and comprehesive care with 5 years of performing surgeries and restoring smiles to patients faces",
    fees: 2000,
    address: {
      phoneNumber: +254784560234,
      Email: "davisdoc@gmail.com",
    },
  },
  {
    id: "doc4",
    name: "Dr Aisha",
    image: aisha,
    Speciality: "Oncologist",
    degree: "MBCHB,MMOC",
    experience: "7 years",
    about:
      "Dr Aisha has a strong commitment to deliver quality and comprehesive care with 5 years of performing surgeries and restoring smiles to patients faces",
    fees: 3000,
    address: {
      phoneNumber: +25744569234,
      Email: "aishaoncologist@gmail.com",
    },
  },
  {
    id: "doc5",
    name: "Dr Muthoni",
    image: muthoni,
    Speciality: "Obstetrics and Gynecology ",
    degree: "MBCHB,MMOG",
    experience: "4 years",
    about:
      "Dr Muthoni has a strong commitment to deliver quality and comprehesive care with 5 years of performing surgeries and restoring smiles to patients faces",
    fees: 3000,
    address: {
      phoneNumber: +25789089134,
      Email: "muthoniobsgyn@gmail.com",
    },
  },
  {
    id: "doc6",
    name: "Dr Moraa",
    image: moraa,
    Speciality: "pedetrician ",
    degree: "MBCHB,MMPD",
    experience: "4 years",
    about:
      "Dr Moraa has a strong commitment to deliver quality and comprehesive care with 5 years of performing surgeries and restoring smiles to patients faces",
    fees: 2000,
    address: {
      phoneNumber: +25786889134,
      Email: "moraapeds@gmail.com",
    },
  },
  {
    id: "doc7",
    name: "Dr Mwangi",
    image: mwangi,
    Speciality: "Gastroenterology",
    degree: "MBCHB,MMG",
    experience: "10 years",
    about:
      "Dr Mwangi has a strong commitment to deliver quality and comprehesive care with 5 years of performing surgeries and restoring smiles to patients faces",
    fees: 4000,
    address: {
      phoneNumber: +25776089134,
      Email: "mwangi@gmail.com",
    },
  },
  {
    id: "doc8",
    name: "Dr kigo",
    image: atioeno,
    Speciality: "Family Medicine",
    degree: "BSCM MCM",
    experience: "5 years",
    about:
      "Dr Kigo has a strong commitment to deliver quality and comprehesive care with 5 years of performing surgeries and restoring smiles to patients faces",
    fees: 2000,
    address: {
      phoneNumber: +25703208913,
      Email: "mwangi@gmail.com",
    },
  },
  {
    id: "doc9",
    name: "Dr Makasi",
    image: makasi,
    Speciality: "Pharmacist",
    degree: "BPHM",
    experience: "3 years",
    about:
      "Dr maksi has a strong commitment to deliver quality and comprehesive care with 5 years of performing surgeries and restoring smiles to patients faces",
    fees: 2000,
    address: {
      phoneNumber: +25703208913,
      Email: "makasi@gmail.com",
    },
  },
  {
    id: "doc10",
    name: "Mary Wambui",
    image: wambui,
    Speciality: "Nutritionist",
    degree: "BSNT",
    experience: "6 years",
    about:
      "Mary Wambui has a strong commitment to deliver quality and comprehesive care with 5 years of performing surgeries and restoring smiles to patients faces",
    fees: 2000,
    address: {
      phoneNumber: +25703208913,
      Email: "marywambui@gmail.com",
    },
  },
  // {
  //   id: "doc11",
  //   name: "Atieno Mercy",
  //   image: mwangi ,
  //   Speciality: "Physiotherapist",
  //   degree: "BPHSTT",
  //   experience: "4 years",
  //   about:
  //     "Onyango Peter has a strong commitment to deliver quality and comprehesive care with 5 years of performing surgeries and restoring smiles to patients faces",
  //   fees: 2000,
  //   address: {
  //     phoneNumber: +25708648913,
  //     Email: "atieno@gmail.com",
  //   },
  // },
];

export const SpecialityData = [
  {
    Speciality: "General physician",
    image: genphy,
  },
  {
    Speciality: "Gynecologist",
    image: gyn,
  },
  {
    Speciality: "Pediatrician",
    image: pedst,
  },
  {
    Speciality: "nutritionist",
    image: nutri,
  },
  {
    Speciality: "pharmacist",
    image: pharm,
  },
];

export const facilittiesData = [
  {
    id: "f1",
    name: "Nairobi General Hospital",
    image: nairobihospital,
    Type: "Tertiary Care Hospital",
    KeyServices:
      "Emergency Room, Orthopedic Surgery General Check-ups, Immunizations, Chronic Disease Management",
    Location: "Upper Hill, Nairobi",
    contact: +257754913,
    Mission:
      "Committed to providing compassionate, patient-centered care with state-of-the-art medical technology.",
    about:
      "Nairobi hospital is a commited hospital to provide quality services. We are registerd by KMPDU and licenced to offer health services to our patients",
  },
  {
    id: "f2",
    name: "The Nairobi Wellness Clinic",
    image: wellness,
    Type: "Family & General Practice Clinic",
    KeyServices:
      "Preventive Screenings,Health Assessments,Rehabilitative Therapy,Clinical Counseling and Therapy",
    Location: "Kilimani, Nairobi",
    contact: +254719876543,
    Mission:
      "Committed to providing compassionate, patient-centered care with state-of-the-art medical technology.",
    about:
      "The Nairobi Wellness Clinic is a commited hospital to provide quality services. We are registerd by KMPDU and licenced to offer health services to our patients",
  },
  {
    id: "f3",
    name: "Thika pediatrics clinic",
    image: peds,
    Type: "pediatrics clinic",
    KeyServices:
      "Immunizations,Well-Child Checkups,Chronic Condition Management,Sick Visits,",
    Location: "Upper Hill, Nairobi",
    contact: +257754913,
    Mission:
      "Committed to providing compassionate, patient-centered care with state-of-the-art medical technology.",
    about:
      "Nairobi hospital is a commited hospital to provide quality services. We are registerd by KMPDU and licenced to offer health services to our patients",
  },
  {
    id: "f4",
    name: "Spar Dental Clinical",
    image: dental,
    Type: "Dental clinic",
    KeyServices:
      "Crowns and Bridges,Teeth Whitening,Orthodontics,Oral and Maxillofacial Surgery",
    Location: "Upper Hill, Nairobi",
    contact: +257754913,
    Mission:
      "Committed to providing compassionate, patient-centered care with state-of-the-art medical technology.",
    about:
      "Nairobi hospital is a commited hospital to provide quality services. We are registerd by KMPDU and licenced to offer health services to our patients",
  },
  {
    id: "f5",
    name: "Nairobi Oncology Cancer",
    image: oncology,
    Type: "oncology center",
    KeyServices:
      "chemotherapy, radiation, management of various types of cancer.",
    Location: "Westlands, Nairobi",
    contact: +257754913,
    Mission:
      "Committed to providing compassionate, patient-centered care with state-of-the-art medical technology.",
    about:
      "Nairobi oncology Center is a commited hospital to provide quality services. We are registerd by KMPDU and licenced to offer health services to our patients",
  },
  {
    id: "f6",
    name: "Kisumu Orthopedics Centre",
    image: orthoped,
    Type: "Orthopedics Centre",
    KeyServices:
      "Orthopedic Surgery,Joint Replacement,Pediatric Orthopedics:,Trauma & Fracture Care",
    Location: "Kisumu CBD",
    contact: +257754913,
    Mission:
      "Committed to providing compassionate, patient-centered care with state-of-the-art medical technology.",
    about:
      "Nairobi hospital is a commited hospital to provide quality services. We are registerd by KMPDU and licenced to offer health services to our patients",
  },
  {
    id: "f7",
    name: "Hope Dermatology Clinic",
    image: dermal,
    Type: "Dermatology Clinic",
    KeyServices:
      "Acne Treatment,Psoriasis and Eczema Management,Skin Cancer Surgery",
    Location: "Moi Avenue Nairobi",
    contact: +257754913,
    Mission:
      "Committed to providing compassionate, patient-centered care with state-of-the-art medical technology.",
    about:
      "Hope Dermatology Clinic is a commited hospital to provide quality services. We are registerd by KMPDU and licenced to offer health services to our patients",
  },
  {
    id: "f8",
    name: "Cardiology Hospital",
    image: cardio,
    Type: "Cardiology Hospital",
    KeyServices:
      "Electrocardiogram (ECG/EKG),Echocardiogram (Echo,Cardiac Imaging:,Cardiac Catheterization and Angiography",
    Location: "Westland, Nairobi",
    contact: +257754913,
    Mission:
      "Committed to providing compassionate, patient-centered care with state-of-the-art medical technology.",
    about:
      "Cardiology Hospital is a commited hospital to provide quality services. We are registerd by KMPDU and licenced to offer health services to our patients",
  },
  {
    id: "f9",
    name: "Restoration Rehabilitation Centre",
    image: rehab,
    Type: "Rehabilitation Centre",
    KeyServices:
      "Physical therapy, occupational therapy, and other services to help patients recover from injuries or illnesses.",
    Location: "Nairobi, CBD",
    contact: +257754913,
    Mission:
      "Committed to providing compassionate, patient-centered care with state-of-the-art medical technology.",
    about:
      "Nairobi hospital is a commited hospital to provide quality services. We are registerd by KMPDU and licenced to offer health services to our patients",
  },
  {
    id: "f10",
    name: "Evalasting Pharmacy",
    image: pharmacy,
    Type: "pharmacy",
    KeyServices:
      "Prescription Dispensing,Medication Therapy Management (MTM),Medication Synchronization (Med Sync),Travel Health Consultations",
    Location: "Upper Hill, Nairobi",
    contact: +257754913,
    Mission:
      "Committed to providing compassionate, patient-centered care with state-of-the-art medical technology.",
    about:
      "Nairobi hospital is a commited hospital to provide quality services. We are registerd by KMPDU and licenced to offer health services to our patients",
  },
  {
    id: "f11",
    name: "",
    image: nairobihospital,
    Type: "Tertiary Care Hospital",
    KeyServices:
      "Emergency Room, Maternity & Pediatric Care, Orthopedic Surgery",
    Location: "Upper Hill, Nairobi",
    contact: +257754913,
    Mission:
      "Committed to providing compassionate, patient-centered care with state-of-the-art medical technology.",
    about:
      "Nairobi hospital is a commited hospital to provide quality services. We are registerd by KMPDU and licenced to offer health services to our patients",
  },
  {
    id: "f12",
    name: "Nairobi General Hospital",
    image: nairobihospital,
    Type: "Tertiary Care Hospital",
    KeyServices:
      "Emergency Room, Maternity & Pediatric Care, Orthopedic Surgery",
    Location: "Upper Hill, Nairobi",
    contact: +257754913,
    Mission:
      "Committed to providing compassionate, patient-centered care with state-of-the-art medical technology.",
    about:
      "Nairobi hospital is a commited hospital to provide quality services. We are registerd by KMPDU and licenced to offer health services to our patients",
  },
];