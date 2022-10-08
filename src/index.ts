import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { camelCase } from 'lodash';
import mapKeysDeep  from 'map-keys-deep-lodash';

@Injectable()
export class ResultToCamelcaseInterceptor implements NestInterceptor {  

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {   

    return next.handle().pipe(
      map(
        (data) => {
          return mapKeysDeep(data, function(value: any, key: any) {
            return camelCase(key)
          })
        }
      )   
    );

  }
}

