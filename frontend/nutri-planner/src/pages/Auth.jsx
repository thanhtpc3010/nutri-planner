import { useState } from 'react';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full">
        <div className="bg-white rounded-3xl shadow-xl border overflow-hidden">
          {/* Header */}
          <div className="px-8 py-6 bg-gradient-to-r from-primary-500 to-purple-600 text-white text-center">
            <h1 className="text-3xl font-bold">Chào mừng đến với NutriPlanner</h1>
            <p className="text-primary-100 mt-2">Quản lý dinh dưỡng thông minh</p>
          </div>

          {/* Toggle Buttons */}
          <div className="flex border-b">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-4 px-6 text-center font-semibold transition-all ${
                isLogin
                  ? 'text-primary-600 border-b-2 border-primary-600 bg-primary-50'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Đăng nhập
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-4 px-6 text-center font-semibold transition-all ${
                !isLogin
                  ? 'text-primary-600 border-b-2 border-primary-600 bg-primary-50'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Đăng ký
            </button>
          </div>

          {/* Forms Container */}
          <div className="relative overflow-hidden">
            <div
              className={`flex transition-transform duration-500 ease-in-out ${
                isLogin ? 'transform translate-x-0' : 'transform -translate-x-full'
              }`}
            >
              {/* Login Form */}
              <div className="w-full flex-shrink-0 p-8">
                <div className="max-w-md mx-auto">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Đăng nhập</h2>
                  <p className="text-gray-600 mb-8">
                    Nhập email và mật khẩu để truy cập NutriPlanner.
                  </p>

                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="login-email">
                        Email
                      </label>
                      <input
                        id="login-email"
                        type="email"
                        placeholder="you@example.com"
                        className="w-full rounded-2xl border border-gray-300 px-4 py-3 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="login-password">
                        Mật khẩu
                      </label>
                      <input
                        id="login-password"
                        type="password"
                        placeholder="••••••••"
                        className="w-full rounded-2xl border border-gray-300 px-4 py-3 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-2xl bg-primary-500 px-6 py-3 text-white font-semibold shadow-lg hover:bg-primary-600 transition-all"
                    >
                      Đăng nhập
                    </button>
                  </form>

                  <p className="text-center text-gray-600 mt-8">
                    Chưa có tài khoản?{' '}
                    <button
                      onClick={toggleForm}
                      className="font-semibold text-primary-600 hover:text-primary-700"
                    >
                      Đăng ký ngay
                    </button>
                  </p>
                </div>
              </div>

              {/* Register Form */}
              <div className="w-full flex-shrink-0 p-8">
                <div className="max-w-md mx-auto">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Đăng ký</h2>
                  <p className="text-gray-600 mb-8">
                    Tạo tài khoản mới để lưu kế hoạch ăn uống và trang yêu thích của bạn.
                  </p>

                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="register-name">
                        Họ và tên
                      </label>
                      <input
                        id="register-name"
                        type="text"
                        placeholder="Tên của bạn"
                        className="w-full rounded-2xl border border-gray-300 px-4 py-3 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="register-email">
                        Email
                      </label>
                      <input
                        id="register-email"
                        type="email"
                        placeholder="you@example.com"
                        className="w-full rounded-2xl border border-gray-300 px-4 py-3 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="register-password">
                        Mật khẩu
                      </label>
                      <input
                        id="register-password"
                        type="password"
                        placeholder="••••••••"
                        className="w-full rounded-2xl border border-gray-300 px-4 py-3 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-2xl bg-primary-500 px-6 py-3 text-white font-semibold shadow-lg hover:bg-primary-600 transition-all"
                    >
                      Tạo tài khoản
                    </button>
                  </form>

                  <p className="text-center text-gray-600 mt-8">
                    Đã có tài khoản?{' '}
                    <button
                      onClick={toggleForm}
                      className="font-semibold text-primary-600 hover:text-primary-700"
                    >
                      Đăng nhập
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;