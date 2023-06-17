import { Request, RequestHandler, Response } from 'express';

import { CowService } from './cow.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';

const createCow: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const cow = req.body;
    const result = await CowService.createCow(cow);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Cow created successfully',
      data: result,
    });
  }
);

const getCows: RequestHandler = catchAsync(
  async (req: Request, res: Response)=> {
    const allCows = await CowService.getAllCows();

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: 'All cow retrieved successfully',
      data: allCows,
    });
  }
)

const getCow: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const cowId: string = req.params.id;
    const cow = await CowService.getCow(cowId);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Retrieved user',
      data: cow,
    })
  }
);

const updateCow: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const cowId: string = req.params.id;
    const updatedCowData = req.body;

    const updatedCow = await CowService.updateCowData(cowId, updatedCowData);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'User data updated',
      data: updatedCow,
    });
  }
)

const deleteCow: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const cowId = req.params.id;
    const result = await CowService.deleteCow(cowId);
    if(!result) {
      sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Can not find cow with this id',
        data: result
      })
    }

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Cow deleted successfully',
      data: result
    })
  }
)

export const CowController = {
  createCow,
  getCows,
  getCow,
  updateCow,
  deleteCow
};
