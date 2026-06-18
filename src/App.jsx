import React, { useState } from 'react';
import { 
  Calendar, MapPin, Phone, Users, CheckCircle, 
  BookOpen, ChefHat, Megaphone, Clock, Award, 
  ArrowRight, MessageCircle, Info, Banknote, Wind
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('courses');

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* 導覽列 */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <ChefHat className="h-8 w-8 text-orange-500 mr-2" />
              <span className="font-bold text-xl text-slate-800">青年職訓專班</span>
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#about" className="text-slate-600 hover:text-orange-500 font-medium">課程簡介</a>
              <a href="#curriculum" className="text-slate-600 hover:text-orange-500 font-medium">訓練內容</a>
              <a href="#prospects" className="text-slate-600 hover:text-orange-500 font-medium">就業方向</a>
              <a href="#apply" className="text-slate-600 hover:text-orange-500 font-medium">報名資訊</a>
              <a 
                href="https://lin.ee/rK1Pvk4" 
                target="_blank" 
                rel="noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-bold flex items-center transition-colors"
              >
                <MessageCircle className="w-4 h-4 mr-1" /> LINE 諮詢
              </a>
            </div>
          </div>
        </div>
      </nav>

      {}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 左側文案區 */}
            <div className="text-left">
              <div className="inline-block bg-[#f97316] text-white px-4 py-1.5 rounded-full text-sm font-bold mb-6 shadow-sm">
                青年職訓專班
              </div>
              
              <h1 className="text-5xl lg:text-[4rem] font-bold leading-tight mb-2 text-[#1e293b] tracking-tight">
                AI數位行銷
              </h1>
              <h1 className="text-5xl lg:text-[4rem] font-bold leading-tight mb-8 tracking-tight">
                <span className="text-[#f97316] mr-4">&amp;</span>
                <span className="text-[#f24e75]">餐飲烘焙培訓班</span>
              </h1>
              
              <p className="text-lg text-slate-500 mb-10 max-w-lg leading-relaxed">
                結合最新 AI 工具與實務烘焙技術，打造新世代餐飲行銷人才！特定對象全額補助，結訓合格專業輔導就業。
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a 
                  href="https://www.surveycake.com/s/grQkq" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="bg-gradient-to-r from-[#f97316] to-[#f24e75] hover:opacity-90 text-white px-8 py-3.5 rounded-full font-bold text-lg text-center flex justify-center items-center transition-transform hover:scale-105 shadow-md"
                >
                  立即報名參訓 <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a 
                  href="https://lin.ee/rK1Pvk4" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="bg-white text-slate-700 border-2 border-slate-100 px-8 py-3.5 rounded-full font-bold text-lg text-center flex justify-center items-center transition-transform hover:scale-105 shadow-sm hover:bg-slate-50"
                >
                  <MessageCircle className="text-[#06C755] mr-2 w-6 h-6" /> 1對1 LINE客服
                </a>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-slate-600">
                <span className="flex items-center"><CheckCircle className="w-5 h-5 mr-1.5 text-[#f97316]" /> 符合條件可申請生活津貼</span>
                <span className="flex items-center"><CheckCircle className="w-5 h-5 mr-1.5 text-[#f97316]" /> 政府補助訓練經費</span>
              </div>
            </div>

            {/* 右側 1040x1040 圖片區 */}
            <div className="relative w-full max-w-[520px] mx-auto lg:mx-0 lg:ml-auto aspect-square group">
              <div className="w-full h-full bg-slate-50 rounded-2xl border-2 border-slate-100 flex flex-col items-center justify-center text-slate-400 overflow-hidden shadow-sm transition-all group-hover:shadow-md">
                 <img 
                   src="https://i.ibb.co/PsTjZWWH/Chat-GPT-Image-2026-6-16-09-51-22.png" 
                   alt="AI與烘焙培訓班主視覺" 
                   className="w-full h-full object-cover"
                 />
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-400 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
            <Banknote className="w-10 h-10 text-blue-500 mb-3" />
            <h3 className="font-bold text-lg mb-1">生活津貼$44,250</h3>
            <p className="text-sm text-slate-600">符合特定條件者<br/>可申請職訓生活津貼</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-orange-400 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
            <Wind className="w-10 h-10 text-orange-500 mb-3" />
            <h3 className="font-bold text-lg mb-1">冷氣教室、專業設備</h3>
            <p className="text-sm text-slate-600">提供最舒適的學習空間<br/>與業界同步的專業器具</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-teal-400 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
            <Award className="w-10 h-10 text-teal-500 mb-3" />
            <h3 className="font-bold text-lg mb-1">雙證照中餐+蛋糕</h3>
            <p className="text-sm text-slate-600">輔導考取專業技術士<br/>大幅提升就業競爭力</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-400 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
            <CheckCircle className="w-10 h-10 text-purple-500 mb-3" />
            <h3 className="font-bold text-lg mb-1">符合資格免費上課</h3>
            <p className="text-sm text-slate-600">政府補助 80%~100%<br/>特定對象全額免費</p>
          </div>
        </div>
      </section>

      {}
      <section id="about" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* 水彩裝飾背景 */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-1/3 translate-y-1/3"></div>

        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl font-bold text-slate-850 mb-4">為什麼選擇這個培訓班？</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-pink-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Baking and Digital Marketing" 
              className="rounded-2xl shadow-xl w-full relative z-10"
            />
            {/* 圖片後的水彩裝飾 */}
            <div className="absolute top-4 left-4 w-full h-full bg-orange-100 rounded-2xl -z-10 mix-blend-multiply filter blur-xl opacity-60"></div>
          </div>
          
          {/* 特色文字列表 - 放大版 */}
          <div className="space-y-10">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 text-orange-600 shadow-sm">
                  <ChefHat className="w-7 h-7" />
                </div>
              </div>
              <div className="ml-5">
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-wide">扎實的餐飲烘焙技術</h3>
                <p className="mt-3 text-lg text-slate-600 leading-relaxed font-medium">
                  涵蓋中餐烹調、經典義式料理、歐風早午餐，到西點蛋糕、法式手作甜點，共高達 212 小時的實作演練，培養可立即上工的硬實力。
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 text-blue-600 shadow-sm">
                  <Megaphone className="w-7 h-7" />
                </div>
              </div>
              <div className="ml-5">
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-wide">最熱門的 AI 數位行銷</h3>
                <p className="mt-3 text-lg text-slate-600 leading-relaxed font-medium">
                  從企劃文案、圖卡專題製作，到餐飲品牌影像與短影音製作，運用最新 AI 工具，教你如何幫品牌加分，成為懂技術也懂行銷的跨界人才。
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-green-100 text-green-600 shadow-sm">
                  <CheckCircle className="w-7 h-7" />
                </div>
              </div>
              <div className="ml-5">
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-wide">結訓即就業，全程輔導</h3>
                <p className="mt-3 text-lg text-slate-600 leading-relaxed font-medium">
                  除了技術課程，還包含求職技巧、職場溝通與就業市場趨勢分析。結訓後積極輔導學員媒合優質廠商，讓你順利接軌職場。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section id="curriculum" className="py-16 bg-slate-50 relative overflow-hidden">
        {/* 水彩裝飾背景 */}
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/3"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/3"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">精實的 320 小時訓練內容</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto rounded-full"></div>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button 
              onClick={() => setActiveTab('courses')}
              className={`px-6 py-3 rounded-full font-bold transition-all shadow-sm ${activeTab === 'courses' ? 'bg-gradient-to-r from-orange-500 to-orange-400 text-white scale-105' : 'bg-white text-slate-600 hover:bg-orange-50 hover:text-orange-500'}`}
            >
              烘焙實務課程內容
            </button>
            <button 
              onClick={() => setActiveTab('marketing')}
              className={`px-6 py-3 rounded-full font-bold transition-all shadow-sm ${activeTab === 'marketing' ? 'bg-gradient-to-r from-blue-500 to-blue-400 text-white scale-105' : 'bg-white text-slate-600 hover:bg-blue-50 hover:text-blue-500'}`}
            >
              AI與數位行銷 
            </button>
            <button 
              onClick={() => setActiveTab('general')}
              className={`px-6 py-3 rounded-full font-bold transition-all shadow-sm ${activeTab === 'general' ? 'bg-gradient-to-r from-teal-500 to-teal-400 text-white scale-105' : 'bg-white text-slate-600 hover:bg-teal-50 hover:text-teal-500'}`}
            >
              全方位烹飪課程
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-4 md:p-8 min-h-[300px] border border-white/50 flex items-center justify-center">
            {activeTab === 'courses' && (
              <div className="w-full animate-fade-in">
                 <img 
                   src="https://i.ibb.co/1fXM11Gr/5.png" 
                   alt="烘焙實務課程內容" 
                   className="w-full h-auto object-contain rounded-2xl shadow-sm border border-orange-100"
                 />
              </div>
            )}

            {activeTab === 'marketing' && (
              <div className="w-full animate-fade-in">
                 <img 
                   src="https://i.ibb.co/twZPSGBz/Z.png" 
                   alt="AI與數位行銷課程內容" 
                   className="w-full h-auto object-contain rounded-2xl shadow-sm border border-blue-100"
                 />
              </div>
            )}

            {activeTab === 'general' && (
              <div className="w-full animate-fade-in">
                 <img 
                   src="https://i.ibb.co/KzBQmLxs/6.png" 
                   alt="全方位烹飪課程" 
                   className="w-full h-auto object-contain rounded-2xl shadow-sm border border-teal-100"
                 />
              </div>
            )}
          </div>
        </div>
      </section>

      {}
      <section id="prospects" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* 水彩裝飾背景 */}
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>

        <div className="text-center mb-12 relative z-10">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">未來就業方向無限寬廣</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8">結訓後，你不只是個會做點心的人，更是具備數位行銷腦的新世代餐飲人才！</p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-lg border border-orange-100 relative overflow-hidden group hover:-translate-y-1 transition-all">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-200 to-orange-100 rounded-bl-full z-0 transition-transform group-hover:scale-150 opacity-70 mix-blend-multiply filter blur-sm"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 shadow-sm">
                <ChefHat className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">烘焙坊與甜點店技術人員</h3>
              <p className="text-slate-600">穩定執行生產與協助商品開發，擔任烘焙製作、產品研發或門市管理等職務。</p>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-lg border border-blue-100 relative overflow-hidden group hover:-translate-y-1 transition-all">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-200 to-blue-100 rounded-bl-full z-0 transition-transform group-hover:scale-150 opacity-70 mix-blend-multiply filter blur-sm"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 shadow-sm">
                <Megaphone className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">品牌社群經營與行銷助理</h3>
              <p className="text-slate-600">運用AI工具製作圖卡與短影音內容，經營餐飲品牌社群或電商平台。</p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-lg border border-teal-100 relative overflow-hidden group hover:-translate-y-1 transition-all">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-teal-200 to-teal-100 rounded-bl-full z-0 transition-transform group-hover:scale-150 opacity-70 mix-blend-multiply filter blur-sm"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4 shadow-sm">
                <Users className="w-6 h-6 text-teal-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">餐廳與中央廚房廚務人員</h3>
              <p className="text-slate-600">直接參與備料與製作流程，擔任早午餐料理、廚務人員，甚至參與 brand 服務設計。</p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-lg border border-purple-100 relative overflow-hidden group hover:-translate-y-1 transition-all">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-200 to-purple-100 rounded-bl-full z-0 transition-transform group-hover:scale-150 opacity-70 mix-blend-multiply filter blur-sm"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 shadow-sm">
                <Award className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">商品開發與營運助理</h3>
              <p className="text-slate-600">協助食品企業與觀光餐飲業進行產品定位、包裝與商品化開發、市場推廣。</p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-lg border border-red-100 relative overflow-hidden group md:col-span-2 lg:col-span-2 hover:-translate-y-1 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-200 to-red-100 rounded-bl-full z-0 transition-transform group-hover:scale-150 opacity-70 mix-blend-multiply filter blur-sm"></div>
            <div className="relative z-10 flex items-start">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 shadow-sm mr-4 flex-shrink-0">
                <Award className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">發展個人甜點品牌與副業</h3>
                <p className="text-slate-600">具備完整技能後，可自創品牌、開發節慶甜點禮盒、發展線上接單與社群販售的副業經營模式。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section id="apply" className="py-16 bg-gradient-to-br from-orange-500 to-pink-500 text-white relative overflow-hidden">
        {/* 水彩裝飾背景 */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] opacity-10 mix-blend-overlay bg-cover bg-center"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 drop-shadow-sm">報名與甄試時程</h2>
            <p className="opacity-90 max-w-2xl mx-auto font-medium">名額有限，預報從速！詳細報名資格與應繳文件請參閱簡章或直接加 LINE 詢問。</p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12 mb-12">
            <div className="text-center relative">
              <div className="absolute inset-0 bg-white opacity-20 rounded-full blur-md scale-110"></div>
              <div className="w-24 h-24 bg-white text-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold shadow-lg relative z-10">1</div>
              <h4 className="font-bold text-xl mb-1">報名截止</h4>
              <p className="opacity-90 font-medium">115/08/18 17:00前</p>
            </div>
            <ArrowRight className="hidden md:block w-10 h-10 opacity-60" />
            <div className="text-center relative">
              <div className="absolute inset-0 bg-white opacity-20 rounded-full blur-md scale-110"></div>
              <div className="w-24 h-24 bg-white text-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold shadow-lg relative z-10">2</div>
              <h4 className="font-bold text-xl mb-1">甄試日期</h4>
              <p className="opacity-90 font-medium">115/08/20 09:00</p>
              <p className="text-sm opacity-80">(筆試及口試)</p>
            </div>
            <ArrowRight className="hidden md:block w-10 h-10 opacity-60" />
            <div className="text-center relative">
              <div className="absolute inset-0 bg-white opacity-20 rounded-full blur-md scale-110"></div>
              <div className="w-24 h-24 bg-white text-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold shadow-lg relative z-10">3</div>
              <h4 className="font-bold text-xl mb-1">開訓日期</h4>
              <p className="opacity-90 font-medium">115/09/01 ~ 11/18</p>
            </div>
          </div>

          {/* 參訓資格與費用 */}
          <div className="bg-white/95 backdrop-blur-sm text-slate-800 rounded-3xl p-8 md:p-12 max-w-5xl mx-auto shadow-2xl border border-white/50">
            <h3 className="text-2xl font-bold mb-10 text-center pb-4 relative before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-24 before:h-1 before:bg-gradient-to-r before:from-orange-400 before:to-pink-400 before:rounded-full">
              參訓資格與費用
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* 參訓資格 */}
              <div>
                <h4 className="font-bold text-xl text-orange-600 mb-6 flex items-center">
                  <span className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3"><CheckCircle className="w-6 h-6 text-orange-500"/></span> 
                  參訓資格
                </h4>
                <ul className="space-y-4 text-slate-700 font-medium">
                  <li className="flex items-start"><span className="text-orange-500 mr-3 text-xl leading-tight">•</span> 年滿15歲(含)以上，29歲以下 一般民眾也可以報名</li>
                  <li className="flex items-start"><span className="text-orange-500 mr-3 text-xl leading-tight">•</span> 具工作意願且工作技能不足之待業青年。</li>
                  <li className="flex items-start"><span className="text-orange-500 mr-3 text-xl leading-tight">•</span> 結訓後必須有就業意願 (有升學計畫者請勿報名)。</li>
                  <li className="flex items-start"><span className="text-orange-500 mr-3 text-xl leading-tight">•</span> 如招生未足額，得開放最多30％名額與一般待業民眾參訓。</li>
                </ul>
              </div>
              
              {/* 參訓費用 */}
              <div>
                <h4 className="font-bold text-xl text-orange-600 mb-6 flex items-center">
                  <span className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3"><Award className="w-6 h-6 text-orange-500"/></span>
                  參訓費用
                </h4>
                <ul className="space-y-6 text-slate-700 font-medium">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 text-xl leading-tight mt-0.5">•</span> 
                    <div className="flex gap-3 w-full">
                      <span className="whitespace-nowrap text-slate-500">特定對象：</span>
                      <p className="flex-1">符合資格之失業者，政府補助訓練經費 <span className="text-red-500 font-bold bg-red-50 px-2 py-0.5 rounded ml-1 inline-block whitespace-nowrap">100%，全額免費</span>。</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 text-xl leading-tight mt-0.5">•</span> 
                    <div className="flex gap-3 w-full">
                      <span className="whitespace-nowrap text-slate-500">一般國民<br className="hidden md:block"/>失業者：</span>
                      <p className="flex-1">政府補助80%，個人僅需自負20%訓練費用 ($8,191元)。</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 text-xl leading-tight">•</span> 
                    符合條件可另申請職訓生活津貼。
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section id="contact" className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
        {/* 背景裝飾 */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-slate-100">
            {/* 地點資訊與 Google Map */}
            <div className="lg:w-2/5 bg-slate-100 relative p-8 lg:p-10 flex flex-col justify-between items-center text-center border-b lg:border-b-0 lg:border-r border-slate-200">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 shadow-sm border border-orange-200">
                  <MapPin className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">上課與報名地點</h3>
                <p className="text-lg text-slate-700 font-bold mb-1">南投縣草屯鎮中正路864號4樓</p>
                <p className="text-slate-500 font-medium mb-4">(實際實作課程於4~5樓專業教室)</p>
              </div>
              
              {/* 嵌入式 Google Map (符合 100% 寬度，高 256px，圓角美化) */}
              <div className="w-full h-64 rounded-2xl overflow-hidden shadow-inner border border-slate-200">
                <iframe 
                  title="上課與報名地點 Google 地圖"
                  src="https://maps.google.com/maps?q=南投縣草屯鎮中正路864號&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=&amp;output=embed" 
                  className="w-full h-full border-0"
                  allowFullScreen="" 
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            
            {/* 聯絡與客服 */}
            <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-slate-800 mb-8 border-b border-slate-100 pb-4">聯絡與諮詢方式</h3>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mr-5 flex-shrink-0 border border-blue-100">
                    <Phone className="w-7 h-7 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-500 mb-1">報名/洽詢專線</h4>
                    <p className="text-xl font-bold text-slate-800">049-2903412 <span className="text-sm font-medium text-slate-500 ml-2">(洽 陳小姐、林小姐)</span></p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center mr-5 flex-shrink-0 border border-purple-100">
                    <Clock className="w-7 h-7 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-500 mb-1">上課時間</h4>
                    <p className="text-xl font-bold text-slate-800">週二至週五 08:30-16:30</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mr-5 flex-shrink-0 border border-green-100">
                    <MessageCircle className="w-7 h-7 text-green-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-500 mb-1">線上 1 對 1 客服</h4>
                    <p className="text-slate-600 mb-3 font-medium">有任何報名資格確認、或課程相關問題，歡迎隨時傳訊詢問！</p>
                    <a 
                      href="https://lin.ee/rK1Pvk4" 
                      target="_blank" 
                      rel="noreferrer"
                      className="bg-[#06C755] hover:bg-[#05b64d] text-white px-8 py-3 rounded-full font-bold inline-flex items-center transition-transform hover:scale-105 shadow-md hover:shadow-[#06C755]/40 text-lg"
                    >
                      <MessageCircle className="w-6 h-6 mr-2" /> 加入 LINE 好友諮詢
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <footer className="bg-slate-900 text-slate-300 py-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-8">

            {/* 左側資訊 */}
            <div className="text-center md:text-left">
              <h3 className="text-white text-2xl font-bold mb-5 flex items-center justify-center md:justify-start">
                <ChefHat className="text-orange-500 mr-3 w-8 h-8" />
                南投縣技職教育協會
              </h3>
              <div className="space-y-3 text-slate-400 font-medium text-lg">
                <p className="flex items-center justify-center md:justify-start">
                  <MapPin className="w-5 h-5 mr-3 text-orange-500 flex-shrink-0" />
                  上課地點：南投縣草屯鎮中正路864號4樓
                </p>
                <p className="flex items-center justify-center md:justify-start">
                  <Phone className="w-5 h-5 mr-3 text-orange-500 flex-shrink-0" />
                  電話：049-2903412
                </p>
              </div>
            </div>

            {/* 右側按鈕 */}
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <a
                href="https://www.surveycake.com/s/grQkq"
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-orange-500 to-pink-500 hover:opacity-90 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center transition-all shadow-lg hover:-translate-y-1 text-lg"
              >
                立即報名 <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="https://lin.ee/rK1Pvk4"
                target="_blank"
                rel="noreferrer"
                className="bg-[#06C755] hover:bg-[#05b64d] text-white px-8 py-4 rounded-full font-bold flex items-center justify-center transition-all shadow-lg hover:-translate-y-1 text-lg"
              >
                <MessageCircle className="w-6 h-6 mr-2" /> 加入 LINE 好友
              </a>
            </div>

          </div>

          <div className="text-center text-sm border-t border-slate-800 pt-8 mt-4 opacity-60">
            <p>&copy; 社團法人南投縣技職教育協會. All rights reserved. 版權所有</p>
          </div>
        </div>
      </footer>
    </div>
  );
}