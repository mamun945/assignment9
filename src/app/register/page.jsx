"use client"

import Image from 'next/image';
import { ChevronRight, PawPrint, Heart, Shield, Clock} from 'lucide-react';
import { useState } from 'react';
import { Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import { toast } from 'react-toastify';
import { redirect } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';

const RegisterPage = () => {
   const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async(e) => {
    setLoading(true);
    e.preventDefault();
     const formData = new FormData(e.currentTarget)
    const user = Object.fromEntries(formData.entries())
    const passwordMatch = user?.password == user?.confirmpassword
    if(!passwordMatch){
       toast.error('passowrd does not match!')
       return ;
    }

  const{data, error} =  await authClient.signUp.email({
      name:user?.name,
      image:user?.image,
      email:user?.email,
      password:user.password
  })

  if(!error){
    toast.success('you have created account succefully!')
    setLoading(false);
    redirect('/login')
  }

  if(error){
    toast.error(error.message)
    setLoading(false);
  }
   
  };

  const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
    provider: "google",
  });
};

  return (
    <div>
        <div className="min-h-screen bg-gradient-to-br from-green-100 via-teal-100 to-green-200 py-8 md:py-12 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          
          {/* Left Side - Features Section */}
          <div className="md:w-1/2 bg-gradient-to-br from-green-500 to-teal-300 p-8 md:p-10 lg:p-12">
            {/* Dog Image/Icon at top */}
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-white/50 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="text-5xl">🐕</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight text-center md:text-left">
              Complete Care For <br />
              <span className="text-green-200">Happy Pets!</span>
            </h1>

            <div className="space-y-6">
              {/* Fun & Play */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-xl">🎾</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Fun & Play</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Bring joy to your pet's day with toys, games, and accessories designed for endless fun, active play, happy moments, and daily excitement.
                  </p>
                </div>
              </div>

              {/* Healthy Nutrition */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-xl">🥗</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Healthy Nutrition</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Balanced meals and premium food options to keep your pet energetic, strong, and thriving with proper nutrition every single day.
                  </p>
                </div>
              </div>

              {/* Daily Hygiene */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-xl">🛁</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Daily Hygiene</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Regular grooming, bathing, and care routines that ensure your furry friend stays clean, fresh, and comfortable throughout the week.
                  </p>
                </div>
              </div>

              {/* Comfortable Living */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-xl">🏠</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Comfortable Living</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Cozy spaces, soft bedding, and calming environments designed to make your pet feel safe, relaxed, and truly at home every moment.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10 pt-6 border-t border-white/20 text-center">
              <div>
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-xs text-white/80">Happy Pets</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-xs text-white/80">Expert Trainers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-xs text-white/80">Vet Support</div>
              </div>
            </div>
          </div>

          {/* Right Side - Registration Form */}
          <div className="md:w-1/2 p-8 md:p-10 lg:p-12">
            <div className="max-w-md mx-auto">
              {/* Form Header */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-green-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🐾</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Create Account</h2>
                <p className="text-gray-500 text-sm mt-1">Join our pet loving community!</p>
              </div>

              {/* Form */}
              <Form onSubmit={handleSubmit} className="space-y-4">
                <div>
                   <TextField
                    isRequired
                    name="name"
                    validate={(value) => {
                    if (value.length < 3) {
                        return "Name must be at least 3 characters";
                    }
                    return null;
                    }}
                >
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                    <FieldError />
                </TextField>
                </div>

                 <div>
                   <TextField
                    isRequired
                    name="image" >
                    <Label>Image Url</Label>
                    <Input placeholder="image url" />
                    <FieldError />
                </TextField>
                </div>

                <div>
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }
                        return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="enter email" />
                        <FieldError />
                    </TextField>
                </div>

                <div>
                  <div className="relative">
                     <TextField
                        isRequired
                        minLength={6}
                        name="password"
                        type={showPassword ? "text" : "password"}
                        validate={(value) => {
                        if (value.length < 6) {
                            return "Password must be at least 6 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[a-z]/.test(value)) {
                            return "Password must contain at least one lower letter";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }
                        return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>Must be at least 6 characters with 1 uppercase 1 lowercase and 1 number</Description>
                        <FieldError />
                    </TextField>
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? "🙈" : "👁️"}
                    </button>
                  </div>
                </div>

                <div>
                  <div className="relative">
                     <TextField
                        isRequired
                        minLength={6}
                        name="confirmpassword"
                        type={showPassword ? "text" : "password"}
                    >
                        <Label>Confirm Password</Label>
                        <Input placeholder="Enter your confirm password" />
                    </TextField>
                   
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-2/3 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? "🙈" : "👁️"}
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    required
                    className="w-4 h-4 text-orange-500 rounded focus:ring-orange-400"
                  />
                  <label className="text-gray-600 text-sm">
                    I agree to the{" "}
                    <a href="#" className="text-green-500 hover:text-teal-600 font-semibold">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-teal-500 hover:text-green-600 font-semibold">
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-green-400 to-teal-500 text-white font-semibold py-3 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Registering...</span>
                    </div>
                  ) : (
                    "Register Now"
                  )}
                </button>

                <p className="text-center text-gray-600 text-sm">
                  Already have an account?{" "}
                  <Link href="/login" className="text-teal-500 hover:text-green-600 font-semibold">
                    Login
                  </Link>
                </p>
              </Form>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="">
                <button onClick={handleGoogleSignIn} className="w-full py-2 border border-teal-300 rounded-lg hover:bg-green-50 transition flex items-center justify-center gap-2 text-sm">
                  <span>📧</span> Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default RegisterPage
