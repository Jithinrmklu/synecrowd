// Mock OTP service
export const sendOTP = async (phoneNumber) => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      // Mock: Always return success with OTP "123456"
      console.log(`OTP sent to ${phoneNumber}: 123456`)
      resolve({ success: true, message: 'OTP sent successfully' })
    }, 1000)
  })
}

export const verifyOTP = async (phoneNumber, otp) => {
  // Mock: Accept any 6-digit OTP, but for demo purposes, accept "123456"
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (otp === '123456' || otp.length === 6) {
        resolve({ success: true, message: 'OTP verified successfully' })
      } else {
        reject({ success: false, message: 'Invalid OTP' })
      }
    }, 1000)
  })
}

