import { ApiProperty } from "@nestjs/swagger";

export class CreateCatDto {
  @ApiProperty({ example: "Garfield" })
  name!: string;
}
