import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendInvoiceEmail(
  to: string,
  invoiceNumber: string,
  amount: number,
  dueDate: string,
  clientName: string,
  eventType: string,
) {
  try {
    const { data, error } = await resend.emails.send({
      from: `${process.env.RESEND_FROM_NAME} <${process.env.RESEND_FROM_EMAIL}>`,
      to: [to],
      subject: `Invoice ${invoiceNumber} - Sweet Burst Events`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #f43f5e, #f59e0b); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Sweet Burst</h1>
            <p style="color: white; margin: 10px 0 0 0; opacity: 0.9;">Creating Unforgettable Moments</p>
          </div>
          
          <div style="padding: 30px; background: white;">
            <h2 style="color: #333; margin-bottom: 20px;">Invoice ${invoiceNumber}</h2>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <p style="margin: 0 0 10px 0;"><strong>Client:</strong> ${clientName}</p>
              <p style="margin: 0 0 10px 0;"><strong>Event Type:</strong> ${eventType}</p>
              <p style="margin: 0 0 10px 0;"><strong>Amount:</strong> $${amount.toLocaleString()}</p>
              <p style="margin: 0;"><strong>Due Date:</strong> ${new Date(dueDate).toLocaleDateString()}</p>
            </div>
            
            <p style="color: #666; line-height: 1.6;">
              Thank you for choosing Sweet Burst for your special event. Please find your invoice details above. 
              Payment is due by the specified date.
            </p>
            
            <div style="text-align: center; margin-top: 30px;">
              <a href="mailto:${process.env.RESEND_FROM_EMAIL}" 
                 style="background: #333; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
                Contact Us
              </a>
            </div>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; text-align: center; color: #666; font-size: 14px;">
            <p style="margin: 0;">Sweet Burst Events | Creating memories that last forever</p>
            <p style="margin: 5px 0 0 0;">hello@sweetburst.com | +1 (555) 123-4567</p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error("Error sending email:", error)
      return { success: false, error }
    }

    return { success: true, data }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, error }
  }
}

export async function sendPaymentConfirmation(
  to: string,
  clientName: string,
  amount: number,
  eventType: string,
  paymentMethod: string,
) {
  try {
    const { data, error } = await resend.emails.send({
      from: `${process.env.RESEND_FROM_NAME} <${process.env.RESEND_FROM_EMAIL}>`,
      to: [to],
      subject: `Payment Confirmation - Sweet Burst Events`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #10b981, #059669); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Payment Received!</h1>
            <p style="color: white; margin: 10px 0 0 0; opacity: 0.9;">Thank you for your payment</p>
          </div>
          
          <div style="padding: 30px; background: white;">
            <h2 style="color: #333; margin-bottom: 20px;">Payment Confirmation</h2>
            
            <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #10b981;">
              <p style="margin: 0 0 10px 0;"><strong>Client:</strong> ${clientName}</p>
              <p style="margin: 0 0 10px 0;"><strong>Event Type:</strong> ${eventType}</p>
              <p style="margin: 0 0 10px 0;"><strong>Amount Paid:</strong> $${amount.toLocaleString()}</p>
              <p style="margin: 0;"><strong>Payment Method:</strong> ${paymentMethod}</p>
            </div>
            
            <p style="color: #666; line-height: 1.6;">
              We have successfully received your payment. Thank you for choosing Sweet Burst Events. 
              We're excited to make your special day unforgettable!
            </p>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; text-align: center; color: #666; font-size: 14px;">
            <p style="margin: 0;">Sweet Burst Events | Creating memories that last forever</p>
            <p style="margin: 5px 0 0 0;">hello@sweetburst.com | +1 (555) 123-4567</p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error("Error sending email:", error)
      return { success: false, error }
    }

    return { success: true, data }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, error }
  }
}
