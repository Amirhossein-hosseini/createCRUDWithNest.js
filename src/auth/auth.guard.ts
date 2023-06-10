import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";

@Injectable()
export class AuthGuard implements CanActivate{
  canActivate(context: ExecutionContext) {
    // const req = context.switchToHttp().getRequest();
    // console.log(req, 'AuthGuard canActivate.......');
    // return true;
    return true;
  }
}
