#import "WindowTintColor.h"

@implementation WindowTintColor

RCT_EXPORT_MODULE()

RCT_REMAP_METHOD(setTintColor,
                  setTintColorWithRed:(int)red withGreen:(int)green
                  withBlue:(int)blue
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)
{
    if (![self isValidColor:red] || ![self isValidColor:green] || ![self isValidColor:blue]) {
        reject(@"WindowTintColor", [NSString stringWithFormat:@"The value of %d,%d,%d` exceeds the range of 0...255", red, green, blue], nil);
        return;
    }
        
    UIColor *color = [UIColor colorWithRed:(CGFloat)red green:(CGFloat)green blue:(CGFloat)blue alpha:1.0];
    UIWindow *keyWindow = [[UIApplication sharedApplication] keyWindow];
    [keyWindow setTintColor: color];
    
    resolve([color description]);
}

+ (BOOL)requiresMainQueueSetup {
    return YES;
}

- (BOOL)isValidColor:(int)color {
    return color <= 255 || color >= 0;
}

@end
