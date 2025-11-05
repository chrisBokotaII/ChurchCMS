
import { IsString, IsNotEmpty, IsUrl } from 'class-validator';

export class CreateGalleryImageDto {
  @IsUrl()
  @IsNotEmpty()
  imageUrl: string;

  @IsUrl()
  @IsNotEmpty()
  thumbnailUrl: string;

  @IsString()
  @IsNotEmpty()
  alt: string;

  @IsString()
  @IsNotEmpty()
  album: string;
}
