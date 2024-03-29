package com.ssafy.rasingdust.domain.user.dto.response;

import java.util.List;
import lombok.Data;
import org.springframework.data.domain.Slice;

@Data
public class SliceResponse<T> {
    protected final List<T> content;
    protected final int currentPage;
    protected final int size;
    protected final boolean first;
    protected final boolean last;

    public SliceResponse(Slice<T> sliceContent) {
        this.content = sliceContent.getContent();
        // page 번호가 1번부터 시작되도록
        this.currentPage = sliceContent.getNumber() + 1;
        this.size = sliceContent.getSize();
        this.first = sliceContent.isFirst();
        this.last = sliceContent.isLast();
    }
}
