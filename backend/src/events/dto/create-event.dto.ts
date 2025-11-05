
import { IsString, IsNotEmpty, IsUrl, IsDateString, IsIn, IsOptional } from 'class-validator';

const categories = ['Community', 'Youth', 'Worship', 'Outreach'];

export class CreateEventDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsDateString()
  @IsNotEmpty()
  date: string;

  @IsString()
  @IsNotEmpty()
  time: string;
  
  @IsString()
  @IsNotEmpty()
  location: string;

  @IsUrl()
  @IsNotEmpty()
  imageUrl: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsIn(categories)
  @IsNotEmpty()
  category: 'Community' | 'Youth' | 'Worship' | 'Outreach';

  @IsUrl()
  @IsOptional()
  registrationUrl?: string;

  @IsUrl()
  @IsOptional()
  calendarLink?: string;
}
