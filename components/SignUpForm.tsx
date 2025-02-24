import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import BackArrow from "@/components/SVG/BackArrow";
import CancleIcon from "@/components/SVG/CancleIcon";
import EyeIcon from "@/components/SVG/EyeIcon";
import EyeOpen from "@/components/SVG/EyeOpen";

import CustomBar from "@/components/CustomBar";
import { Formik } from "formik";
import * as Yup from "yup";
import AppButton from "./ui/AppButton";
import { useRouter } from "expo-router";

const SignupSchema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  mobile: Yup.string()
    .matches(/^\d{9}$/, "Enter a valid 9-digit mobile number")
    .required("Mobile number is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

interface SignUpFormProps {
  showPassword: boolean;
  setShowPassword: (show: boolean) => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({
  showPassword,
  setShowPassword,
}) => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-primary pt-10">
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <View className="p-4">
          <BackArrow />
          <TouchableOpacity onPress={() => router.push("/Products")}>
            <Text className="text-sm text-pantryGreen text-right py-2 font-avenir">
              Explore app
            </Text>
          </TouchableOpacity>
          <Text
            className="text-[40px]
            text-pantryGreen
           font-garamondBoldItalic"
          >
            Welcome to
          </Text>

          <Text
            className="text-[40px]
            text-pantryGreen
           font-garamondBoldItalic"
          >
            Pantry by Marble
          </Text>
          <Text className="text-base text-pantryGreen py-2 font-avenir font-[400] ">
            Sign up for easy payment, collection and much more
          </Text>
          <CustomBar height="h-5" />

          <Formik
            initialValues={{
              fullName: "",
              email: "",
              mobile: "",
              password: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              router.push("/Products");
            }}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              setFieldValue,
            }) => (
              <View className="mt-6">
                {/* Full Name */}

                <View className="mb-4 pt-7">
                  <Text className="text-pantryGreen">Full name</Text>
                  <View className="flex-row items-center border-b border-pantryGreen ">
                    <TextInput
                      className="flex-1 text-lg text-pantryGreen pl-0"
                      placeholder="full name"
                      onChangeText={handleChange("fullName")}
                      onBlur={handleBlur("fullName")}
                      value={values.fullName}
                    />
                    {values.fullName.length > 0 && (
                      <TouchableOpacity
                        onPress={() => setFieldValue("fullName", "")}
                      >
                        <CancleIcon />
                      </TouchableOpacity>
                    )}
                  </View>
                  {touched.fullName && errors.fullName && (
                    <Text className="text-red-500 text-xs mt-1">
                      {errors.fullName}
                    </Text>
                  )}
                </View>

                {/* Email */}
                <View className="mb-4">
                  <Text className="text-pantryGreen">Email</Text>
                  <View className="flex-row items-center border-b border-pantryGreen ">
                    <TextInput
                      className="flex-1 text-lg text-pantryGreen pl-0"
                      placeholder="john.doe@email.com"
                      keyboardType="email-address"
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      value={values.email}
                    />
                    {values.email.length > 0 && (
                      <TouchableOpacity
                        onPress={() => setFieldValue("email", "")}
                      >
                        <CancleIcon />
                      </TouchableOpacity>
                    )}
                  </View>
                  {touched.email && errors.email && (
                    <Text className="text-red-500 text-xs mt-1">
                      {errors.email}
                    </Text>
                  )}
                </View>

                <View className="mb-4">
                  <Text className="text-pantryGreen font-semibold">
                    Mobile number
                  </Text>
                  <View className="flex-row items-center border-b border-pantryGreen">
                    <Text className="text-lg font-semibold text-pantryGreen">
                      +27 |
                    </Text>
                    <TextInput
                      className="flex-1 text-lg text-pantryGreen "
                      placeholder="Phone number"
                      keyboardType="phone-pad"
                      onChangeText={handleChange("mobile")}
                      onBlur={handleBlur("mobile")}
                      value={values.mobile}
                    />
                    {values.mobile.length > 0 && (
                      <TouchableOpacity
                        onPress={() => setFieldValue("mobile", "")}
                      >
                        <CancleIcon />
                      </TouchableOpacity>
                    )}
                  </View>
                  {touched.mobile && errors.mobile && (
                    <Text className="text-red-500 text-xs mt-1">
                      {errors.mobile}
                    </Text>
                  )}
                </View>

                {/* Password */}
                <View className="mb-4">
                  <Text className="text-pantryGreen font-semibold">
                    Create password
                  </Text>
                  {/* <View className="flex-row items-center"> */}
                  <View className="flex-row items-center border-b border-pantryGreen py-2">
                    <TextInput
                      className="flex-1 text-lg text-pantryGreen"
                      placeholder="Password"
                      secureTextEntry={!showPassword}
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                      value={values.password}
                    />
                    <TouchableOpacity
                      onPress={() => setShowPassword(!showPassword)}
                    >
                      <Text className="text-pantryGreen ml-2">
                        {showPassword ? <EyeIcon /> : <EyeOpen />}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  {touched.password && errors.password && (
                    <Text className="text-red-500 text-xs mt-1">
                      {errors.password}
                    </Text>
                  )}
                </View>

                {/* Submit Button */}

                <AppButton
                  title="Sign up"
                  onPress={() => handleSubmit()}
                  containerStyles="mt-2"
                />
              </View>
            )}
          </Formik>

          <View className="items-center py-6 px-1">
            {/* Login Link */}
            <Text className=" mb-4 text-pantryGreen font-avenir text-sm">
              Have an account?{" "}
              <Text className="font-[800] text-pantryGreen text-sm">Login</Text>
            </Text>

            {/* OR Divider */}
            <View className="flex-row items-center w-full my-4">
              <View className="flex-1 border-t border-pantryGreen" />
              <Text className="mx-4 text-pantryGreen">or</Text>
              <View className="flex-1 border-t border-pantryGreen" />
            </View>

            {/* Explore App Button */}

            <AppButton
              title="Explore Our App "
              onPress={() => router.push("/Products")}
              containerStyles="w-full"
            />

            {/* Terms and Policy */}
            <Text className="text-pantryGreen text-center mt-4 font-avenir text-sm">
              By signing up you agree to our,
              <Text className="font-bold">Terms</Text>,
              <Text className="font-bold">Data Policy</Text>, and{" "}
              <Text className="font-bold">Cookies Policy</Text>.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpForm;
