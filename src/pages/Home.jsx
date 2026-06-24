import {
  items,
  customerNotes,
  technicianNotes,
  servicesItems,
  termsAndConditions,
  columnsData,
} from "../utils/constants";
import { Phone, MapPin, Globe, Mail } from "lucide-react";
import carImage from "../assets/Image.jpeg";
import Logo from "../assets/Logo.png";
import Qrcode from "../assets/Qrcode.png";

function Home() {
  return (
    <>
      {/* Top Header Information Row */}
      <div className="flex justify-between items-center">
        <img src={Logo} className="h-10 sm:h-12 w-72 my-auto" alt="Logo" />
        <div className="flex flex-col gap-y-1">
          <div className="flex items-center gap-1">
            <Phone size={20} className="border-gray-500 border-[1px] p-[3px] rounded-full" />
            <span className="text-[10px] font-bold">+971 50 123 4567</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={20} className="border-gray-500 border-[1px] p-[3px] rounded-full" />
            <span className="text-[10px] font-bold">UAE , Ajman, Free Zone</span>
          </div>
          <div className="flex items-center gap-1">
            <Globe size={20} className="border-gray-500 border-[1px] p-[3px] rounded-full" />
            <span className="text-[10px] font-bold">www.automasterpro.com</span>
          </div>
          <div className="flex items-center gap-1">
            <Mail size={20} className="border-gray-500 border-[1px] p-[3px] rounded-full" />
            <span className="text-[10px] font-bold">info@automasterpro.com</span>
          </div>
        </div>
      </div>

      {/* Main Framework Block */}
      <div className="relative py-1.5 mx-3 mt-10p rounded-2xl border-[2px] border-gray-400">
        <div className="absolute -top-7 left-2 text-[11px] text-red-500 font-bold flex items-center gap-x-1">
          Date:
          <span className="text-green-500">
            06-08-2025 <span className="ps-1">18:24:16</span>
          </span>
        </div>

        <div className="absolute -top-[38px] w-[190px] left-1/2 -translate-x-1/2 bg-gray-400 text-white py-1 flex flex-col justify-center items-center rounded-t-xl">
          <p className="text-lg font-bold flex gap-x-2 tracking-wider">
            عمل <span> بطاقة</span>
          </p>
          <p className="text-[10px] tracking-wide">JB2016AH0040</p>
        </div>

        <div className="px-3 py-0 flex flex-col gap-y-1.5" dir="rtl">
          {/* Entry/Exit Time Status Details */}
          <div className="flex justify-between text-[11px] font-semibold">
            <div className="flex items-center border-[2px] border-gray-400">
              <p className="p-2 text-white bg-gray-400">دخول</p>
              <span className="px-1 flex gap-x-2">
                18:24:16 <span>06-08-2025</span>
              </span>
            </div>
            <div className="flex items-center border-[2px] border-gray-400">
              <p className="p-2 text-white bg-gray-400">خروج</p>
              <span className="px-1 flex gap-x-2">
                18:24:16 <span>06-08-2025</span>
              </span>
            </div>
          </div>

          {/* Customer Metadata Block */}
          <div className="flex flex-col">
            <p className="text-center text-[13px] font-bold bg-gray-200 py-0.5 border-[2px] border-b-0 border-gray-400 rounded-t-xl">
              بيانات العميل
            </p>
            <div className="grid grid-cols-3 gap-x-6 w-full p-2 border-[2px] border-t-0 border-gray-400">
              <div className="flex">
                <p className="text-xs font-bold">الاسم:</p>
                <span className="ps-2 text-gray-600 w-full border-b-[2px] border-dotted border-gray-700 text-xs font-semibold pb-1">
                  خليفة عبيد أحمد الشامسي
                </span>
              </div>
              <div className="flex">
                <p className="text-xs font-bold">الشركة:</p>
                <span className="ps-2 text-gray-600 w-full border-b-[2px] border-dotted border-gray-700 text-xs font-semibold">
                  رسلان لتجارة السيارات
                </span>
              </div>
              <div className="flex">
                <p className="text-xs font-bold">المتحرك:</p>
                <span className="ps-2 text-gray-600 w-full border-b-[2px] border-dotted border-gray-700 text-xs font-semibold">
                  0501234552
                </span>
              </div>
            </div>
          </div>

          {/* Vehicle Metrics Data Block */}
          <div className="flex flex-col">
            <p className="text-center bg-gray-200 py-0.5 text-[13px] font-bold rounded-t-xl border-[2px] border-b-0 border-gray-400">
              بيانات المركبة
            </p>
            <div className="grid grid-cols-6 w-full border-[2px] border-t-0 border-gray-400 text-center">
              <div className="border-l-[3px] border-gray-200 py-1"><p className="text-[12px] font-bold">نوع المركبة</p></div>
              <div className="border-l-[3px] border-gray-200 py-1"><p className="text-[12px] font-bold">الموديل</p></div>
              <div className="border-l-[3px] border-gray-200 py-1"><p className="text-[12px] font-bold">رقم اللوحة</p></div>
              <div className="border-l-[3px] border-gray-200 py-1"><p className="text-[12px] font-bold">اللون</p></div>
              <div className="border-l-[3px] border-gray-200 py-1"><p className="text-[12px] font-bold">رقم العداد</p></div>
              <div className="py-1"><p className="text-[12px] font-bold">رقم القاعدة</p></div>
            </div>
            <div className="grid grid-cols-6 w-full border-[2px] border-t-0 border-gray-400 text-center">
              <div className="border-l-[3px] border-gray-200 py-1"><p className="text-gray-600 text-[12px] font-semibold">نيسان صني</p></div>
              <div className="border-l-[3px] border-gray-200 py-1"><p className="text-gray-600 text-[12px] font-semibold">2024</p></div>
              <div className="border-l-[3px] border-gray-200 py-1"><p className="text-gray-600 text-[12px] font-semibold">AJMAN A 55990</p></div>
              <div className="border-l-[3px] border-gray-200 py-1"><p className="text-gray-600 text-[12px] font-semibold">أبيض</p></div>
              <div className="border-l-[3px] border-gray-200 py-1"><p className="text-gray-600 text-[12px] font-semibold">168502</p></div>
              <div className="py-1"><p className="text-gray-600 text-[12px] font-semibold">IN457687BT56788</p></div>
            </div>
          </div>

          {/* Visual Diagram Inspection and Notes Panel */}
          <div className="grid grid-cols-6 gap-x-2 mt-0.5">
            <div className="flex flex-col">
              <p className="text-center bg-gray-200 py-0.5 text-[12px] font-bold rounded-t-xl border-[2px] border-b-0 border-gray-400">
                الفحص النظري
              </p>
              <img
                src={carImage}
                alt="Car Inspection Vector Map"
                className="w-full h-[135px] border-[2px] border-t-0 border-gray-400 object-cover"
              />
            </div>

            <div className="col-span-5 flex flex-col gap-y-1">
              {/* Vehicle Checklist */}
              <div className="w-full p-1 pr-28 relative border-[2px] border-gray-400 min-h-[42px]">
                <div className="absolute top-0 right-0 px-2 py-0.5 bg-gray-200 font-bold text-[10px] border-b-[2px] border-l-[2px] border-gray-400">
                  ملاحظات المركبة
                </div>
                <div className="flex flex-wrap gap-2 p-0.5">
                  {items.map((label, index) => (
                    <label key={index} className="flex items-center gap-0.5 cursor-pointer">
                      <input
                        checked
                        readOnly
                        type="checkbox"
                        className="h-3 w-3 appearance-none rounded border border-gray-300 bg-white checked:border-green-800 checked:bg-white checked:after:flex checked:after:items-center checked:after:justify-center checked:after:text-green-900 checked:after:content-['✓']"
                      />
                      <span className="text-[10px] font-bold">{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Customer Notes */}
              <div className="w-full p-1 pr-24 relative border-[2px] border-gray-400 min-h-[42px]">
                <div className="absolute top-0 right-0 px-2 py-0.5 bg-gray-200 font-bold text-[10px] border-b-[2px] border-l-[2px] border-gray-400">
                  ملاحظات العميل
                </div>
                <div className="flex flex-wrap gap-1 p-0.5">
                  {customerNotes.map((label, index) => (
                    <label key={index} className="flex items-center px-2 bg-gray-100 border rounded-full text-green-900 font-semibold text-[10px]">
                      <span>{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Technician Notes */}
              <div className="w-full p-1 pr-24 relative border-[2px] border-gray-400 min-h-[42px]">
                <div className="absolute top-0 right-0 px-2 py-0.5 bg-gray-200 font-bold text-[10px] border-b-[2px] border-l-[2px] border-gray-400">
                  ملاحظات الفني
                </div>
                <div className="flex flex-wrap gap-1 p-0.5">
                  {technicianNotes.map((label, index) => (
                    <label key={index} className="flex items-center px-2 bg-gray-100 border rounded-full text-green-800 font-bold text-[10px]">
                      <span>{label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Offered Workshop Services */}
          <div>
            <p className="text-center bg-gray-200 py-0.5 text-[13px] font-bold rounded-t-xl border-[2px] border-b-0 border-gray-400">
              الخدمات
            </p>
            <div className="p-1 flex flex-wrap gap-x-4 border-[2px] border-t-0 border-gray-500" dir="rtl">
              {servicesItems.map((label, index) => (
                <div key={index} className="flex items-center">
                  <label className="flex items-center gap-1 text-green-900 font-semibold text-xs">
                    <div className="w-[4px] h-[4px] rounded-full bg-gray-900"></div>
                    <span className="text-[10px] font-bold">{label}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Component Inventory Matrix */}
          <div>
            <p className="text-center bg-gray-200 py-0.5 font-bold text-[12px] rounded-t-xl border-[2px] border-b-0 border-gray-400">
              قطع الغيار
            </p>
            <div className="grid grid-cols-3 divide-x divide-x-reverse divide-gray-300 border-[2px] border-t-0 border-gray-500">
              {columnsData.map((columnItems, colIndex) => (
                <div key={colIndex} className="flex flex-col">
                  <div className="grid grid-cols-5 bg-gray-50 border-b border-gray-300 text-center font-semibold text-green-900 text-xs py-[1px]">
                    <div className="col-span-4 border-l border-gray-300 px-2 text-start text-[10px] font-bold">الوصف</div>
                    <div className="col-span-1 px-1 text-[10px] font-bold">الكمية</div>
                  </div>
                  <div className="flex flex-col divide-y divide-gray-200 flex-1">
                    {columnItems.map((item, rowIndex) => (
                      <div key={rowIndex} className="grid grid-cols-5 text-[10px] font-semibold text-green-900 text-center py-[1px] items-center">
                        <div className="col-span-4 border-l border-gray-300 px-2 text-right truncate flex items-center h-full min-h-[16px]">
                          {item?.desc || ""}
                        </div>
                        <div className="col-span-1 px-2 flex items-center justify-center bg-gray-50/30 h-full">
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

      {/* Contract Terms and Conditions Block */}
      <div className="mt-1.5 mx-3" dir="rtl">
        <p className="ps-6 bg-gray-200 py-0.5 text-[13px] font-bold rounded-t-xl border-[2px] border-b-0 border-gray-400">
          الشروط والأحكام
        </p>
        <div className="p-1.5 border-[2px] border-t-0 border-gray-500">
          <ol className="space-y-0.5 ps-2">
            {termsAndConditions.map((term, index) => (
              <li key={index} className="font-bold text-green-900 text-justify flex items-start gap-1">
                <span className="text-[8px] font-bold">{index + 1}-</span>
                <span className="text-[8px] font-bold leading-tight">{term}</span>
              </li>
            ))}
          </ol>
          <div className="mt-1 flex items-center">
            <label className="flex items-center gap-1 cursor-pointer select-none text-green-900">
              <input
                checked
                readOnly
                type="checkbox"
                className="h-3 w-3 appearance-none rounded border border-gray-300 bg-white checked:border-green-800 checked:bg-white checked:after:flex checked:after:items-center checked:after:justify-center checked:after:text-green-900 checked:after:content-['✓']"
              />
              <span className="text-[8px] font-bold">أقر بأنني قد قرأت جميع الشروط وبنود هذا العقد واوافق عليها</span>
            </label>
          </div>
        </div>
      </div>

      {/* Footer Approvals Signatures Block */}
      <div className="mt-1 mb-0 mx-3 grid grid-cols-10 gap-x-1.5" dir="rtl">
        <div className="border-[2px] border-gray-500 p-1 col-span-2 grid h-14 grid-cols-3">
          <p className="font-bold text-[9px]">توقيع العميل:</p>
          <div className="col-span-2 flex justify-center items-center h-10 w-full opacity-90 text-gray-500">
            <svg viewBox="0 0 100 50" className="w-full h-full stroke-current stroke-[1] fill-none">
              <path d="M10,40 Q30,5 50,25 T90,10 M40,45 L60,5" />
            </svg>
          </div>
        </div>

        <div className="border-[2px] border-gray-500 p-1 col-span-7 flex justify-between w-full h-14">
          <div className="flex flex-col justify-center gap-y-0.5 w-full">
            <div className="flex items-center gap-x-2">
              <p className="text-[8px] font-bold">الفني المشرف:</p>
              <span className="text-gray-600 text-[8px] font-semibold">خليفة عبيد أحمد الشامسي</span>
            </div>
            <div className="flex items-center gap-x-1">
              <p className="text-[8px] font-bold">الملاحظات:</p>
              <span className="text-gray-600 text-[8px] font-semibold">لا توجد ملاحظات</span>
            </div>
          </div>

          <div className="grid grid-cols-3 w-1/2">
            <p className="font-bold text-[9px]">توقيعه:</p>
            <div className="col-span-2 flex justify-center items-center w-full opacity-90 text-gray-500">
              <svg viewBox="0 0 100 50" className="w-full h-full stroke-current stroke-[1] fill-none">
                <path d="M10,40 Q30,5 50,25 T90,10 M40,45 L60,5" />
              </svg>
            </div>
          </div>
        </div>

        <div className="border-[2px] border-gray-500 p-1 col-span-1 h-14 flex items-center justify-center">
          <img src={Qrcode} className="max-h-full max-w-full object-contain" alt="QR Code" />
        </div>
      </div>
    </>
  );
}

export default Home;