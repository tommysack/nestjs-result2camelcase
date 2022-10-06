import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { mapKeys, camelCase } from 'lodash';

@Injectable()
export class ResultToCamelcaseInterceptor implements NestInterceptor {  

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {   

    return next.handle().pipe(
      map((data) => {return mapKeys(data, (value, key) => camelCase(key))})   
    );

  }
}