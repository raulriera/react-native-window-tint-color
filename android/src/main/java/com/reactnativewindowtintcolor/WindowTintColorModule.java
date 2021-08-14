package com.reactnativewindowtintcolor;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

@ReactModule(name = WindowTintColorModule.NAME)
public class WindowTintColorModule extends ReactContextBaseJavaModule {
    public static final String NAME = "WindowTintColor";

    public WindowTintColorModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    @NonNull
    public String getName() {
        return NAME;
    }


    // Example method
    // See https://reactnative.dev/docs/native-modules-android
    @ReactMethod
    public void setTintColor(int red, int green, int blue, Promise promise) {
        promise.reject("Not supported in this platform");
    }

    public static native int nativeSetTintColor(int red, int green, int blue);
}
