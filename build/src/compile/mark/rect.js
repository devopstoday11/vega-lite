"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var channel_1 = require("../../channel");
var fielddef_1 = require("../../fielddef");
var scale_1 = require("../../scale");
var mark_1 = require("../../mark");
var log = require("../../log");
var mixins = require("./mixins");
exports.rect = {
    vgMark: 'rect',
    role: undefined,
    encodeEntry: function (model) {
        return tslib_1.__assign({}, x(model), y(model), mixins.color(model), mixins.nonPosition('opacity', model));
    }
};
function x(model) {
    var xDef = model.encoding.x;
    var x2Def = model.encoding.x2;
    var xScale = model.scale(channel_1.X);
    if (fielddef_1.isFieldDef(xDef) && xDef.bin && !x2Def) {
        return mixins.binnedPosition('x', model, 0);
    }
    else if (xScale && scale_1.hasDiscreteDomain(xScale.type)) {
        /* istanbul ignore else */
        if (xScale.type === scale_1.ScaleType.BAND) {
            return mixins.bandPosition('x', model);
        }
        else {
            // We don't support rect mark with point/ordinal scale
            throw new Error(log.message.scaleTypeNotWorkWithMark(mark_1.RECT, xScale.type));
        }
    }
    else {
        return tslib_1.__assign({}, mixins.pointPosition('x', model, 'zeroOrMax'), mixins.pointPosition2(model, 'zeroOrMin', 'x2'));
    }
}
function y(model) {
    var yDef = model.encoding.y;
    var y2Def = model.encoding.y2;
    var yScale = model.scale(channel_1.Y);
    if (fielddef_1.isFieldDef(yDef) && yDef.bin && !y2Def) {
        return mixins.binnedPosition('y', model, 0);
    }
    else if (yScale && scale_1.hasDiscreteDomain(yScale.type)) {
        /* istanbul ignore else */
        if (yScale.type === scale_1.ScaleType.BAND) {
            return mixins.bandPosition('y', model);
        }
        else {
            // We don't support rect mark with point/ordinal scale
            throw new Error(log.message.scaleTypeNotWorkWithMark(mark_1.RECT, yScale.type));
        }
    }
    else {
        return tslib_1.__assign({}, mixins.pointPosition('y', model, 'zeroOrMax'), mixins.pointPosition2(model, 'zeroOrMin', 'y2'));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21waWxlL21hcmsvcmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5Q0FBbUM7QUFDbkMsMkNBQTBDO0FBQzFDLHFDQUF5RDtBQUN6RCxtQ0FBZ0M7QUFDaEMsK0JBQWlDO0FBRWpDLGlDQUFtQztBQUt0QixRQUFBLElBQUksR0FBaUI7SUFDaEMsTUFBTSxFQUFFLE1BQU07SUFDZCxJQUFJLEVBQUUsU0FBUztJQUNmLFdBQVcsRUFBRSxVQUFDLEtBQWdCO1FBQzVCLE1BQU0sc0JBQ0QsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUNSLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFDUixNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUNuQixNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsRUFDdkM7SUFDSixDQUFDO0NBQ0YsQ0FBQztBQUVGLFdBQVcsS0FBZ0I7SUFDekIsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDOUIsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7SUFDaEMsSUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFDLENBQUMsQ0FBQztJQUU5QixFQUFFLENBQUMsQ0FBQyxxQkFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzNDLE1BQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLElBQUkseUJBQWlCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRCwwQkFBMEI7UUFDMUIsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxpQkFBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbkMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLHNEQUFzRDtZQUN0RCxNQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsd0JBQXdCLENBQUMsV0FBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzNFLENBQUM7SUFDSCxDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDTixNQUFNLHNCQUNELE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxXQUFXLENBQUMsRUFDN0MsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxFQUNsRDtJQUNKLENBQUM7QUFDSCxDQUFDO0FBRUQsV0FBVyxLQUFnQjtJQUN6QixJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUM5QixJQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztJQUNoQyxJQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQUMsQ0FBQyxDQUFDO0lBRTlCLEVBQUUsQ0FBQyxDQUFDLHFCQUFVLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDM0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sSUFBSSx5QkFBaUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BELDBCQUEwQjtRQUMxQixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLGlCQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNuQyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDekMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sc0RBQXNEO1lBQ3RELE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxXQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDM0UsQ0FBQztJQUNILENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNOLE1BQU0sc0JBQ0QsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBQyxFQUM3QyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLEVBQ2xEO0lBQ0osQ0FBQztBQUNILENBQUMifQ==