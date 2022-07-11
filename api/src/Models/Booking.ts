import { Schema, model, Types } from 'mongoose';
import { BookingSchemaType } from '../types';

const BookingSchema = new Schema<BookingSchemaType>({
  mentor_id: { ref: 'Mentor', type: Types.ObjectId },
  mentee_id: { ref: 'User', type: Types.ObjectId },
  mentee_email: String,
  mentor_email: String,
  start_date: Date,
  end_date: Date,
  status: {
    type: String,
    enum: ['accepted', 'cancelled', 'waiting'],
    default: 'waiting',
  },
  session: {
    email: String,
    topic: String,
    description: String,
  },
  google_meeting_link: String,
});

export const BookingModel = model('Booking', BookingSchema);
