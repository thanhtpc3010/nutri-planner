import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-xl border p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Đăng nhập</h1>
      <p className="text-gray-600 mb-8">
        Nhập email và mật khẩu để truy cập NutriPlanner.
      </p>

      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-2xl border border-gray-300 px-4 py-3 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="password">
            Mật khẩu
          </label>
          <input
            id="password"
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
        <Link to="/register" className="font-semibold text-primary-600 hover:text-primary-700">
          Đăng ký ngay
        </Link>
      </p>
    </div>
  );
};

export default Login;
