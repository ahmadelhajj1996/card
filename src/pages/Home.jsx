import { Phone, MapPin, Mail, MessageCircle } from "lucide-react";
import carImage from "../assets/Image.jpeg";
import Logo from "../assets/Logo.png";

const items = [
  "ضوء تنبيه المحرك",
  "ملاحظات المركبة",
  "الفرامل",
  "مانع الانزلاق",
  "تنبيه الفرامل اليدوية",
  "تنبية الفرامل اليدوية",
  "الفرامل",
  "مانع الانزلاق",
];

const customerNotes = [
  "حرارة عند الوقوف",
  "الإشارة في المراية اليمين لا تعمل",
  "صوت طقطقة أسفل المركبة",
  "تأخر بالتشغيل",
  "التكييف لا يبرد عند الوقوف التام",
  "حرارة عند الوقوف",
  "صوت عند الضغط على الفرامل من الأمام",
];

const technicianNotes = [
  "يجب الإنتهاء من المركبة خلال يومين كحد أقصى",
  "قطع غيار اصلية فقط",
  "يوجد مشكلة تهريب بالكهرباء من المسجل",
  "البطارية بحاجة الى شحن أو استبدال",
  "تشييك الليكات في دورة التكييف",
  "التأكد من عدم وجود تهريب في دورة المياه",
  "تشييك الفرامل إن كانت بحاجة الى استبدال من عدمه",
  "فحص كمبيوتر",
  "الدرامات رقيقة لا تصلح للخراطة يجب استبدالها بعد إبلاغ العميل",
  "تشييك الظفيرة في حال وجود شورت كهرباء",
];

const servicesItems = [
  "تبديل سفايف أمامية",
  "مخرطة دسكـات عدد 4",
  "تبديل بوشات",
  "تبديل راديتر",
  "تبديل لينك رود",
  "تبديل كت بوش",
  "تبديل لمبة إشارة مراية يمين",
  "تنظيف انجكترات",
  "تبديل إكسل بوت يمين",
  "تبديل لمبة إشارة مراية يمين",
  "تبديل لمبة إشارة مراية يمين",
  "تبديل سفايف أمامية",
  "مخرطة دسكـات عدد 4",
  "تبديل بوشات",
  "تبديل راديتر",
  "تبديل لينك رود",
  "تبديل كت بوش",
];

const sparePartsList = [
  { qty: "1", desc: "سفايف أمامية" },
  { qty: "2", desc: "رود لينك" },
  { qty: "1", desc: "لمبة إشارة" },
  { qty: "1", desc: "سفايف أمامية" },
  { qty: "2", desc: "رود لينك" },
  { qty: "1", desc: "لمبة إشارة" },
  { qty: "1", desc: "فلتر زيت محرك" },
  { qty: "1", desc: "راديتر مستعمل أصلي" },
  { qty: "2", desc: "جمبينات خلفية KYP" },
  { qty: "1", desc: "زيت ماكينة كاسترول 5W30" },
  { qty: "1", desc: "راديتر مستعمل أصلي" },
  { qty: "2", desc: "جمبينات خلفية KYP" },
  { qty: "1", desc: "كت بوش هيفي ديوتي" },
  { qty: "1", desc: "أكسل بوت يمين" },
  { qty: "1", desc: "مياه راديتر مانول أزرق" },
  { qty: "1", desc: "أكسل بوت يمين" },
  { qty: "1", desc: "أكسل بوت يمين" },
  { qty: "", desc: "" },
];

const termsAndConditions = [
  "لا يتم استلام السيارة إلا بعد دفع جميع المستحقات الخاصة بالعقد.",
  "يحق للمؤجر إيقاف المركبة أو سحبها في أي وقت دون الرجوع إلى المستأجر في حال تأخره عن سداد مستحقات العقد دون تحمله أي مسؤولية عن أي متعلقات للمستأجر داخل المركبة.",
  "يتعلم المستأجر في عدم عدم إلتزامه بدفع مبلغ 5000 درهم بالإضافة إلى أتعاب المحاماة.",
  "المستأجر مسؤول عن رسوم التأمين الزائدة البالغة 1500-2000 درهماً + 20% من تكلفة الإصلاح إذا كان عمره أقل من 25 عاماً أو عمر رخصة القيادة أقل من عام واحد.",
  "لا يتم إعادة الضمان إلا بعد مرور 10 أيام عمل للتأكد من عدم وجود أي مخالفات مرورية وما شابه.",
  "تسري كافة القوانين واللوائح والأنظمة والمعمول بها في الدولة على طرفي الإتفاقية سواء ورد أم لم يرد في هذه الإتفاقية بما لا يتعارض مع أحكامها.",
];

const totalColumns = 3;
const itemsPerColumn = Math.ceil(sparePartsList.length / totalColumns);

// 2. Map indices into 3 structural data chunks
const columnsData = Array.from({ length: totalColumns }, (_, colIndex) => {
  const start = colIndex * itemsPerColumn;
  const end = start + itemsPerColumn;
  return sparePartsList.slice(start, end);
});

function Home() {
  return (
    <>
      <div className=" flex justify-between mt-8 mx-16">
        <img src={Logo} className=" w-96" />
        <div className=" flex flex-col gap-y-1">
          <div className="flex items-center gap-2">
            <Phone
              size={28}
              className=" border-gray-900 border-2 p-1 rounded-full"
            />
            <span className=" pb-1 font-semibold">+971 50 123 4567</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin
              size={28}
              className=" border-gray-900 border-2 p-1 rounded-full"
            />
            <span className=" pb-1 font-semibold">UAE , Ajman, Free Zone </span>
          </div>

          <div className="flex items-center gap-2">
            <Mail
              size={28}
              className=" border-gray-900 border-2 p-1 rounded-full"
            />
            <span className=" pb-1 font-semibold">www.automasterpro.com</span>
          </div>

          <div className="flex items-center gap-2">
            <MessageCircle
              size={28}
              className=" border-gray-900 border-2 p-1 rounded-full"
            />
            <span className=" pb-1 font-semibold">info@automasterpro.com</span>
          </div>
        </div>
      </div>

      <div className="relative mx-16 me-20 mt-16 ">
        <div className=" absolute -top-8 text-sm text-red-500 font-medium ">
          Date: <span className=" text-green-500">06-08-2025 18:24:16</span>
        </div>
        <div className=" absolute -top-[72px] left-1/2 -translate-x-1/2  bg-gray-400 text-white py-4 px-12 flex flex-col gap-y-2 justify-center items-center rounded-t-2xl ">
          <p className=" text-4xl ">بطاقة عمل</p>
          <p>JB2016AH0040</p>
        </div>

        <div className="rounded-xl p-2 border-[1px] border-gray-600 py-3 ">
          <div className="flex justify-between px-8 " dir="rtl">
            <div className="flex  items-center border-[2px] border-gray-400">
              <p className=" p-3 py-1 font-semibold text-white bg-gray-400 ">
                دخول
              </p>
              <span className=" px-3  py-[2px] font-medium  ">
                06-08-2025 18:24:16
              </span>
            </div>
            <div className="flex  items-center border-[2px] border-gray-400">
              <p className=" p-3 py-1 font-semibold text-white bg-gray-400 ">
                خروج
              </p>
              <span className=" px-3  py-[2px] font-medium  ">
                06-08-2025 18:24:16
              </span>
            </div>
          </div>

          <div className=" mt-2 pt-2 px-7 flex flex-col" dir="rtl">
            <p className=" text-xl text-center bg-gray-200 py-2 font-bold rounded-t-xl">
              بيانات العميل
            </p>
            <div className=" grid  grid-cols-3 w-full  gap-x-32 px-8 py-3 border-[2px] border-t-0 border-gray-400">
              <div className="flex gap-x-3">
                <p className=" font-semibold">الاسم:</p>

                <span className="lock w-full text-gray-500 font-medium border-b-[2px] border-dotted border-gray-700 pb-1 ">
                  خليفة عبيد أحمد الشامسي
                </span>
              </div>
              <div className="flex gap-x-3">
                <p className=" font-semibold">الشركة:</p>
                <span className="lock w-full text-gray-500 font-medium border-b-[2px] border-dotted border-gray-700 pb-1 ">
                  رسلان لتجارة السيارات
                </span>
              </div>
              <div className="flex gap-x-3">
                <p className=" font-semibold">المتحرك:</p>
                <span className="lock w-full text-gray-500 font-medium border-b-[2px] border-dotted border-gray-700 pb-1 ">
                  0501234552
                </span>
              </div>
            </div>
          </div>

          <div className=" mt-2 pt-2 px-7 flex flex-col " dir="rtl">
            <p className=" text-xl text-center bg-gray-200 py-2 font-bold rounded-t-xl">
              بيانات المركبة
            </p>

            <div className="grid grid-cols-6 w-full px-8 border-[2px] border-t-0 border-gray-400 text-center">
              <div className=" border-l-[3px] border-gray-200 pb-2">
                <p className="font-semibold">نوع المركبة</p>
              </div>

              <div className="border-l-[3px] border-gray-200 pb-2">
                <p className="font-semibold">الموديل</p>
              </div>

              <div className="border-l-[3px] border-gray-200 pb-2">
                <p className="font-semibold">رقم اللوحة</p>
              </div>

              <div className="border-l-[3px] border-gray-200 pb-2">
                <p className="font-semibold">اللون</p>
              </div>

              <div className="border-l-[3px] border-gray-200 pb-2">
                <p className="font-semibold">رقم العداد</p>
              </div>

              <div className="border-l-0 border-r-0 border-gray-400 pb-2">
                <p className="font-semibold">رقم القاعدة</p>
              </div>
            </div>
            <div className="grid grid-cols-6 w-full px-8 border-[2px] border-t-0 border-gray-400 text-center">
              <div className=" border-l-[3px] border-gray-200 pb-2 pt-1">
                <p className="text-gray-500 font-medium">نيسان صني</p>
              </div>

              <div className="border-l-[3px] border-gray-200 pb-2" pt-1>
                <p className="text-gray-500 font-medium">2024</p>
              </div>

              <div className="border-l-[3px] border-gray-200 pb-2" pt-1>
                <p className="text-gray-500 font-medium">AJMAN A 55990</p>
              </div>

              <div className="border-l-[3px] border-gray-200 pb-2" pt-1>
                <p className="text-gray-500 font-medium"> أبيض</p>
              </div>

              <div className="border-l-[3px] border-gray-200 pb-2" pt-1>
                <p className="text-gray-500 font-medium">168502</p>
              </div>

              <div className="border-l-0 border-r-0 border-gray-40 pt-1 pb-2">
                <p className="text-gray-500 font-medium">IN457687BT56788</p>
              </div>
            </div>
          </div>

          <div className=" mt-2 grid grid-cols-5 gap-x-8 px-7" dir="rtl">
            <div className="pt-2  flex flex-col ">
              <p className=" text-xl text-center bg-gray-200 py-2 font-bold rounded-t-xl">
                الفحص النظري
              </p>
              <img
                src={carImage}
                alt="Car"
                className="w-full h-auto border-[2px] border-t-0 border-gray-400 "
              />
            </div>

            <div className="col-span-4 mt-2 flex flex-col gap-y-3">
              <div className="w-full  p-3 relative border-[2px] border-gray-500">
                <div className="absolute top-0 right-0 p-2 bg-gray-300 font-bold">
                  ملاحظات المركبة
                </div>

                <div className="flex flex-wrap gap-4 gap-x-20 rtl:text-right">
                  {items.map((label, index) => (
                    <label
                      key={index}
                      className="flex items-center gap-2 cursor-pointer select-none text-sm font-semibold first:ps-40"
                    >
                      <input
                        checked
                        type="checkbox"
                        className="h-4 w-4 cursor-pointer appearance-none rounded border border-gray-300 bg-white 
                        checked:bg-white checked:border-green-600 
                        checked:after:content-['✓'] checked:after:text-green-800 
                        checked:after:flex checked:after:items-center checked:after:justify-center
                        checked:after:font-bold checked:after:text-2xl
                        checked:after:-mt-[12px]" /* Use negative margin here to micro-adjust it upward */
                      />
                      <span>{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="w-full  p-3 relative border-[2px] border-gray-500">
                <div className="absolute top-0 right-0 p-2 bg-gray-300 font-bold">
                  ملاحظات العميل
                </div>
                <div className="flex flex-wrap gap-2 gap-x-20 rtl:text-right ps-6">
                  {customerNotes.map((label, index) => (
                    <label
                      key={index}
                      className="flex items-center   cursor-pointer select-none bg-gray-100 border  rounded-full py-1 px-2 text-green-800 font-bold text-sm hover:bg-emerald-50 transition-colors first:ms-32"
                    >
                      <span>{label}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="w-full  p-4 relative border-[2px] border-gray-500">
                <div className="absolute top-0 right-0 p-2 bg-gray-300 font-bold">
                  ملاحظات الفني
                </div>
                <div className="flex flex-wrap gap-2 gap-x-20 rtl:text-right ps-6">
                  {technicianNotes.map((label, index) => (
                    <label
                      key={index}
                      className="flex items-center   cursor-pointer select-none bg-gray-100 border  rounded-full py-1 px-2 text-green-800 font-bold text-sm hover:bg-emerald-50 transition-colors first:ms-32"
                    >
                      <span>{label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className=" mt-2 pt-2 px-7 flex flex-col " dir="rtl">
            <p className=" text-xl text-center bg-gray-200 py-2 font-bold rounded-t-xl">
              الخدمات
            </p>
            <div
              className="p-4 px-7 flex flex-wrap gap-y-5  border-[2px] border-t-0 border-gray-500  "
              dir="rtl"
            >
              {servicesItems.map((label, index) => (
                <div
                  key={index}
                  className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 px-4 flex items-center "
                >
                  <label className="flex items-center gap-3 cursor-pointer select-none text-emerald-950 font-bold text-[14px] leading-tight w-full hover:opacity-80 transition-opacity ">
                    <div className=" w-1.5 h-1.5 rounded-full bg-gray-800 "></div>
                    <span className="truncate font-bold">{label}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className=" mt-2 pt-2 px-7 flex flex-col " dir="rtl">
            <p className=" text-xl text-center bg-gray-200 py-2 font-bold rounded-t-xl">
              قطع الغيار
            </p>

            <div className="grid grid-cols-3 divide-x divide-x-reverse divide-gray-300 border-[2px] border-t-0 border-gray-500">
              {columnsData.map((columnItems, colIndex) => (
                <div key={colIndex} className="flex flex-col">
                  {/* Sub-Header Row */}
                  <div className="grid grid-cols-5 bg-gray-50 border-b border-gray-300 text-center font-bold text-emerald-950 text-sm py-2">
                    <div className="col-span-4 border-l border-gray-300 px-2 text-start">
                      الوصف
                    </div>
                    <div className="col-span-1 px-2">الكمية</div>
                  </div>

                  {/* Table Column Data Body */}
                  <div className="flex flex-col divide-y divide-gray-200 flex-1">
                    {columnItems.map((item, rowIndex) => (
                      <div
                        key={rowIndex}
                        className="grid grid-cols-5 text-sm font-bold text-emerald-900 text-center h-[32px] items-center hover:bg-gray-50/50 transition-colors"
                      >
                        <div className="col-span-4 border-l border-gray-300 px-4 text-right truncate h-full flex items-center ">
                          {item?.desc || ""}
                        </div>

                        {/* Quantity cell (Takes 1 out of 4 columns) */}
                        <div className="col-span-1 px-2 h-full flex items-center justify-center bg-gray-50/30">
                          {item?.qty || ""}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-24 pt-2 mx-20  me-16 flex flex-col " dir="rtl">
        <p className=" text-xl text-right ps-6 bg-gray-200 py-2 font-bold rounded-t-xl">
          الشروط والأحكام
        </p>

        <div className="p-6  border-[2px] border-t-0 border-gray-500">
          <ol className="space-y-0  ">
            {termsAndConditions.map((term, index) => (
              <li
                key={index}
                className=" font-bold text-green-900  text-justify flex items-start gap-1"
              >
                {/* Native looking number marker for pixel-perfect RTL alignment */}
                <span className="shrink-0 select-none">{index + 1}-</span>
                <span>{term}</span>
              </li>
            ))}
          </ol>

          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center ">
            <label
              className="flex items-center gap-3 cursor-pointer select-none text-emerald-950 font-bold text-sm"
              dir="rtl"
            >
              <input
                checked
                type="checkbox"
                className="h-4 w-4 cursor-pointer appearance-none rounded border border-gray-300 bg-white 
                        checked:bg-white checked:border-green-600 
                        checked:after:content-['✓'] checked:after:text-green-800 
                        checked:after:flex checked:after:items-center checked:after:justify-center
                        checked:after:font-bold checked:after:text-2xl
                        checked:after:-mt-[12px]" /* Use negative margin here to micro-adjust it upward */
              />
              <span className=" text-lg">
                أقر بأنني قد قرأت جميع الشروط وبنود هذا العقد واوافق عليها
              </span>
            </label>
          </div>
        </div>
      </div>

      <div className="  my-4 mx-20  me-16  bg-white  " dir="rtl">
        <div className="flex flex-col md:flex-row items-stretch gap-1  rounded-sm shadow-sm ">
          <div className="flex-1 border-[2px] border-gray-500 p-4 relative flex items-center justify-between min-h-[120px]">
            <div className="flex-1 flex justify-center items-center h-full">
              <div className=" whitespace-nowrap self-start" dir="rtl">
                <span className="font-bold text-gray-900 text-sm md:text-base -ms-28">
                  توقيع العميل:
                </span>
              </div>
              <div className="w-36 h-20 opacity-90   ps-12   text-gray-400">
                <svg
                  viewBox="0 0 100 50"
                  className="w-full h-full stroke-current stroke-[2] fill-none"
                >
                  <path d="M10,40 Q30,5 50,25 T90,10 M40,45 L60,5" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex-[2] border-[2px] border-gray-500 p-1 px-3 flex flex-col justify-between min-h-[120px]">
            {/* TOP SECTION: Name, Technician, and Signature */}
            <div className=" flex justify-between">
              <div className="text-sm md:text-base text-gray-800">
                <span className="font-bold text-gray-900">الفني المشرف:</span>{" "}
                أحمد حمزاوي
              </div>

              <div className="text-sm md:text-base text-gray-800">
                <span className="font-bold text-gray-900">توقيعه:</span>{" "}
                <div className="w-36 h-20 opacity-90   ps-12   text-gray-400">
                  <svg
                    viewBox="0 0 100 50"
                    className="w-full h-full stroke-current stroke-[2] fill-none"
                  >
                    <path d="M10,40 Q30,5 50,25 T90,10 M40,45 L60,5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="text-right mt-2 pt-2 border-t border-dashed border-gray-100">
              <div className="text-sm font-bold text-gray-900">ملاحظات:</div>
              <div className="text-sm text-gray-500 mt-1">لا توجد ملاحظات</div>
            </div>
          </div>

          <div className="flex items-center justify-center  min-w-[100px]">
            {/* Placeholder for QR Code */}
            <div className="w-48 h-full border-2 border-black p-1 bg-white flex items-center justify-center">
              {/* Replace with actual <QRCode value="..." /> library component or static image */}
              <div className="grid grid-cols-4 gap-1 w-full h-full opacity-90">
                {[...Array(16)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-full h-full ${
                      (i % 2 === 0 && i % 3 !== 0) ||
                      i === 0 ||
                      i === 3 ||
                      i === 12 ||
                      i === 15
                        ? "bg-black"
                        : "bg-white"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
