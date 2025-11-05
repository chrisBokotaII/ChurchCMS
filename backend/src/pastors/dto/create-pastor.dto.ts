
import { IsString, IsNotEmpty, IsUrl } from 'class-validator';

export class CreatePastorDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsUrl()
  @IsNotEmpty()
  imageUrl: string;

  @IsString()
  @IsNotEmpty()
  bio: string;
}
