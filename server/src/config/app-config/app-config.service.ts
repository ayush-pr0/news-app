import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private readonly configService: ConfigService) {}

  public getPort(): number {
    return Number(this.getValue('SERVER_PORT'));
  }

  public getNodeEnv(): string {
    return this.getValue('NODE_ENV', false) || 'development';
  }

  public getDatabaseHost(): string {
    return this.getValue('DATABASE_HOST');
  }

  public getDatabasePort(): number {
    return Number(this.getValue('DATABASE_PORT'));
  }

  public getDatabaseUsername(): string {
    return this.getValue('DATABASE_USERNAME');
  }

  public getDatabasePassword(): string {
    return this.getValue('DATABASE_PASSWORD');
  }

  public getDatabaseName(): string {
    return this.getValue('DATABASE_NAME');
  }

  // Environment utility methods
  public isDevelopment(): boolean {
    return this.getNodeEnv() === 'development';
  }

  public isProduction(): boolean {
    return this.getNodeEnv() === 'production';
  }

  public getJwtSecret(): string {
    return this.getValue('JWT_SECRET');
  }

  public getJwtExpiresIn(): string {
    return this.getValue('JWT_EXPIRES_IN', false) || '7d';
  }

  private getValue(key: string, throwOnMissing = true): string {
    const value = this.configService.get<string>(key);

    if (!value && throwOnMissing) {
      throw new Error(`Configuration key '${key}' is missing`);
    }

    return value;
  }
}
