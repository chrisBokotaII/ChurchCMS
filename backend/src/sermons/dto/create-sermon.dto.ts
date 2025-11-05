
import { IsString, IsNotEmpty, IsUrl, IsDateString } from 'class-validator';

export class CreateSermonDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  speaker: string;

  @IsString()
  @IsNotEmpty()
  series: string;

  @IsDateString()
  @IsNotEmpty()
  date: string;

  @IsUrl()
  @IsNotEmpty()
  videoUrl: string;

  @IsUrl()
  @IsNotEmpty()
  audioUrl: string;

  @IsUrl()
  @IsNotEmpty()
  thumbnailUrl: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
