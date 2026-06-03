"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import photos from '../../../public/loginPhoto.png'
import { FieldError, Form, Input, Label, TextField } from '@heroui/react';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';
import { useRouter } from "next/navigation";

const LoginPage = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signIn.email({
            email: user?.email,
            password: user?.password,
            rememberMe: true,
        });

        if (!error) {
            toast.success('You have logged in successfully!');
            setLoading(false);
            router.push("/");
        } else {
            toast.error(error.message);
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
            <div className="min-h-screen bg-white font-sans">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 lg:pt-12 pb-10 sm:pb-16 lg:pb-20 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">

                    <div className="relative flex justify-center items-center w-full">
                        <div className="relative w-full flex justify-center">
                            <div className="absolute -left-4 sm:-left-8 lg:-left-10 -top-4 sm:-top-8 lg:-top-10 w-60 sm:w-80 lg:w-96 h-60 sm:h-80 lg:h-96 bg-amber-100 rounded-[60px] sm:rounded-[80px] lg:rounded-[100px] rotate-12 -z-10" />

                            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl w-full flex justify-center">
                                <Image
                                    src={photos}
                                    alt="Happy woman holding a dog"
                                    width={520}
                                    height={620}
                                    className="object-cover w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[520px] h-auto rounded-3xl"
                                    priority
                                />
                            </div>

                            <div className="absolute top-2 right-2 sm:-top-4 sm:-right-4 lg:-top-6 lg:-right-6 bg-white rounded-2xl shadow-lg p-2 sm:p-3 lg:p-4 flex items-center gap-2 sm:gap-3">
                                <div className="text-3xl sm:text-4xl">🐶</div>
                                <div>
                                    <div className="font-semibold text-xs sm:text-sm">Max</div>
                                    <div className="text-[10px] sm:text-xs text-emerald-600">Very Happy Today</div>
                                </div>
                            </div>

                            <div className="absolute -left-4 sm:-left-8 lg:-left-12 top-6 sm:top-10 lg:top-12 text-3xl sm:text-5xl lg:text-6xl text-amber-400 opacity-30 pointer-events-none">~</div>
                            <div className="absolute right-2 sm:right-6 lg:right-8 bottom-6 sm:bottom-10 lg:bottom-12 text-3xl sm:text-4xl lg:text-5xl rotate-12 opacity-40 pointer-events-none">~</div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="w-full p-4 sm:p-6 md:p-8 lg:p-12">
                            <div className="w-full max-w-md mx-auto">

                                <div className="text-center mb-8">
                                    <div className="w-16 h-16 bg-green-300 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-2xl">🐾</span>
                                    </div>
                                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">Login Account</h2>
                                    <p className="text-gray-500 text-sm mt-1">Join our pet loving community!</p>
                                </div>

                                <Form onSubmit={handleSubmit} className="space-y-4">
                                    <TextField isRequired name="email" type="email">
                                        <Label>Email</Label>
                                        <Input placeholder="enter email" />
                                        <FieldError />
                                    </TextField>

                                    <div className="relative">
                                        <TextField
                                            isRequired
                                            minLength={6}
                                            name="password"
                                            type={showPassword ? "text" : "password"}
                                        >
                                            <Label>Password</Label>
                                            <Input placeholder="Enter your password" />
                                            <FieldError />
                                        </TextField>

                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-2/3 -translate-y-1/2 text-gray-400"
                                        >
                                            {showPassword ? "🙈" : "👁️"}
                                        </button>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full bg-gradient-to-r from-green-400 to-teal-500 text-white font-semibold py-3 rounded-lg disabled:opacity-70"
                                    >
                                        {loading ? (
                                            <div className="flex items-center justify-center gap-2">
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                <span>Loading...</span>
                                            </div>
                                        ) : (
                                            "Login Now"
                                        )}
                                    </button>
                                </Form>

                                <p className="text-center text-gray-600 text-sm my-4">
                                    I Don't Have Account?
                                    <Link href="/register" className="text-teal-500 hover:text-green-600 font-semibold">
                                        Register
                                    </Link>
                                </p>

                                <div className="relative my-6">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-300"></div>
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-4 bg-white text-gray-500">Or continue with</span>
                                    </div>
                                </div>

                                <div>
                                    <button
                                        onClick={handleGoogleSignIn}
                                        className="w-full py-2 border border-teal-300 rounded-lg hover:bg-green-50 transition flex items-center justify-center gap-2 text-sm"
                                    >
                                        <span>📧</span> Google
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LoginPage;